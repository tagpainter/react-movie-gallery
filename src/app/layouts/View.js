import React from "react";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { mdiArrowLeft } from "@mdi/js";
import { useWindowScroll } from "react-use";

import { LocaleLink } from "@/app/lib/i18n";

import Logo from "@/app/components/Logo";
import Icon from "@/app/components/Icon";

import Footer from "./shared/Footer";
import Prepend from "./shared/Prepend";

export default ({ component: Component, ...rest }) => {
  const history = useHistory();

  return (
    <Wrap
      as={motion.div}
      variants={vars}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <Prepend />
      <Topbar>
        <BackButton onClick={() => history.goBack()}>
          <Icon path={mdiArrowLeft} />
        </BackButton>
        <LogoSection />
      </Topbar>
      <Main>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Route
            key={rest.location.pathname}
            location={rest.location}
            computedMatch={rest.computedMatch}
          >
            <Component padder={<Padder />} {...rest} />
          </Route>
        </AnimatePresence>
      </Main>
      <Footer />
    </Wrap>
  );
};

const Padder = styled.div`
  height: 7rem;
`;

const Topbar = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 60rem;
  margin: 0 auto;
  height: 0;
`;

const BackButton = styled.button`
  border: 0;
  margin: 1.5rem;
  padding: 0;
  width: 4rem;
  height: 4rem;
  background-color: #111;
  color: white;
  padding-top: 0.1em;
  font-size: 1.33em;
`;

const LogoHolder = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.33rem;
`;

const logoHolderVariants = {
  hide: { opacity: 0 },
  show: { opacity: 1 }
};

const LogoSection = () => {
  const { y } = useWindowScroll();

  return (
    <LogoHolder
      as={motion.span}
      variants={logoHolderVariants}
      initial="show"
      animate={y > 50 ? "hide" : "show"}
    >
      <Logo as={LocaleLink} to="/" />
    </LogoHolder>
  );
};

const Main = styled.div`
  position: relative;
  min-height: 100vh;
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

const vars = {
  hide: { opacity: 0, transition: { when: "afterChildren" } },
  show: { opacity: 1, transition: { delay: 0.33, when: "beforeChildren" } }
};
