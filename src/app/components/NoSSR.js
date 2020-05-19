import React from "react";

export default ({ children, onSSR = null }) => {
  const [canRender, setCanRender] = React.useState(false);

  React.useEffect(() => {
    setCanRender(true);
  }, []);

  return canRender ? children : onSSR;
};
