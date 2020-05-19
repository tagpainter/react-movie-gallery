import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default styled(({ ...rest }) => {
  return (
    <svg viewBox="0 0 100 100" {...rest}>
      <Circle
        as={motion.circle}
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 1,
          loop: Infinity,
          ease: "easeInOut"
        }}
      />
    </svg>
  );
})`
  width: 3em;
  height: 3em;
`;

const Circle = styled.circle.attrs({
  cx: 50,
  cy: 50,
  r: 48
})`
  stroke: currentColor;
  stroke-width: 4px;
  fill: none;
  stroke-dasharray: 200 100;
`;
