import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Spinner from "./Spinner";

export default () => {
  return (
    <Wrap
      as={motion.div}
      variants={variants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <Spinner />
    </Wrap>
  );
};

const variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 }
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #222;
  color: #eee;
  padding: 2rem;

  ${Spinner} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
