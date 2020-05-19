import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export default ({ component: Component, ...rest }) => {
  return (
    <Wrap
      as={motion.div}
      variants={vars}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        <Route
          key={rest.location.pathname}
          location={rest.location}
          computedMatch={rest.computedMatch}
        >
          <Component {...rest} />
        </Route>
      </AnimatePresence>
    </Wrap>
  );
};

const vars = {
  hide: { opacity: 0, transition: { when: "afterChildren" } },
  show: { opacity: 1, transition: { when: "beforeChildren" } }
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & > * {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
`;
