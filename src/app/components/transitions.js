import React from "react";
import { motion } from "framer-motion";

export const FadeTransition = ({ children, ...rest }) => {
  return (
    <motion.div
      variants={{
        hide: { opacity: 0, transition: { when: "afterChildren" } },
        show: { opacity: 1, transition: { when: "beforeChildren" } }
      }}
      initial="hide"
      animate="show"
      exit="hide"
      {...rest}
    >
      {children}
    </motion.div>
  );
};
