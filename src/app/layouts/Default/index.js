import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Prepend from "../shared/Prepend";
import Footer from "../shared/Footer";

import Bar from "./Bar";
import Menu from "./Menu";

export default ({ component: Component, ...rest }) => {
  return (
    <Wrap
      as={motion.div}
      variants={vars}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <Top>
        <Prepend />
        <Bar />
        <Menu />
      </Top>
      <Main>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Route
            key={rest.location.pathname}
            location={rest.location}
            computedMatch={rest.computedMatch}
          >
            <Component padder={<Padder height="9.5rem" />} {...rest} />
          </Route>
        </AnimatePresence>
      </Main>
      <Footer />
    </Wrap>
  );
};

const vars = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.33 } }
};

const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Main = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Padder = styled.div`
  height: ${p => p.height};
  transition: height 0.15s ease;
`;

const Wrap = styled.div`
  position: relative;
  min-height: 100vh;

  ${Prepend} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  ${Footer} {
    position: relative;
  }
`;
