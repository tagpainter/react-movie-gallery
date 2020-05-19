import React from "react";
import { useLocation, useHistory } from "react-router-dom";

export const ScrollRestore = () => {
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    // For support ssr initial render, set to `auto` onunload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";

      const handler = () => {
        window.history.scrollRestoration = "auto";
      };

      window.addEventListener("unload", handler);
      return () => window.removeEventListener("unload", handler);
    }
  }, []);

  React.useEffect(() => {
    // Horrible black magic for ios chrome
    if (
      !"scrollRestoration" in window.history ||
      window.history.scrollRestoration == "auto" ||
      /CriOS/.test(window.navigator.userAgent)
    ) {
      const handler = () => {
        disableBodyScroll();
      };

      window.addEventListener("popstate", handler);

      return () => {
        enableBodyScroll();
        window.removeEventListener("popstate", handler);
      };
    }
  }, []);

  React.useEffect(() => {
    const saveScroll = () => {
      if (location.key == history.location.key) {
        let newPosition = getWindowScrollPosition();
        setPosition(location.key, newPosition);
      }
    };

    window.requestAnimationFrame(() => {
      switch (history.action) {
        case "POP":
          let position = getPosition(location.key);
          window.scrollTo(...position);
          break;
        case "PUSH":
          window.scrollTo(0, 0);
          break;
      }
      saveScroll();
    });

    window.addEventListener("scroll", saveScroll);

    return () => {
      window.removeEventListener("scroll", saveScroll);
    };
  }, [location]);

  return null;
};

const getPosition = key => {
  let positions =
    JSON.parse(window.sessionStorage.getItem("react-router-scroll-restore")) ||
    {};
  return positions[key] || [0, 0];
};

const setPosition = (key, position) => {
  let positions =
    JSON.parse(window.sessionStorage.getItem("react-router-scroll-restore")) ||
    {};
  positions[key] = position;
  window.sessionStorage.setItem(
    "react-router-scroll-restore",
    JSON.stringify(positions)
  );
};

const getWindowScrollPosition = () => {
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

  var x = supportPageOffset
    ? window.pageXOffset
    : isCSS1Compat
    ? document.documentElement.scrollLeft
    : document.body.scrollLeft;
  var y = supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;

  return [x, y];
};

function disableBodyScroll() {
  let position = getWindowScrollPosition();
  document.body.style.width = "100%";
  document.body.style.top = -position[1] + "px";
  document.body.style.left = -position[0] + "px";
  document.body.style.position = "fixed";
}

function enableBodyScroll() {
  document.body.style.position = null;
  document.body.style.top = null;
  document.body.style.left = null;
  document.body.style.width = null;
}
