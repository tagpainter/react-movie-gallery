import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useI18n } from "./i18n";

export const Page = ({ component: Component, layout: Layout, ...props }) => {
  const { locale } = useI18n();

  return (
    <Route {...props}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Route
          key={`${Layout.displayName}${locale.code}`}
          location={props.location}
          computedMatch={props.computedMatch}
          {...props}
        >
          <Layout component={Component} {...props} />
        </Route>
      </AnimatePresence>
    </Route>
  );
};

export function createNavLink(Base) {
  return styled(({ className, ...rest }) => {
    return <Base activeClassName={className} {...rest} />;
  });
}
