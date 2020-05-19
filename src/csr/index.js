import "./polyfill.js";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";

import { ResourcesProvider } from "@/lib/resources";

import { TmdbResourceFactory } from "@/app/lib/tmdb";
import { TranslationResourceFactory, getBestLocale } from "@/app/lib/i18n";
import App from "../app";

async function main() {
  if (process.env.NODE_ENV == "development") {
    const eruda = require("eruda");
    let el = document.createElement("div");
    document.body.appendChild(el);

    eruda.init({
      container: el,
      tool: ["console", "elements"]
    });
  }

  const bestLocale = getBestLocale(
    window.navigator.languages ||
      window.navigator.language ||
      window.navigator.userLanguage ||
      window.navigator.systemLanguage
  );

  const root = ReactDOM.unstable_createRoot(document.getElementById("root"));
  let initialResources = {};

  if (document.getElementById("__INITIAL_RESOURCES__")) {
    initialResources = JSON.parse(
      document.getElementById("__INITIAL_RESOURCES__").innerHTML
    );
    await loadableReady();
  }

  const resources = {
    tmdb: TmdbResourceFactory(initialResources.tmdb),
    translation: TranslationResourceFactory(initialResources.translation)
  };

  root.render(
    <ResourcesProvider resources={resources}>
      <BrowserRouter>
        <App bestLocale={bestLocale} />
      </BrowserRouter>
    </ResourcesProvider>
  );
}
main();
