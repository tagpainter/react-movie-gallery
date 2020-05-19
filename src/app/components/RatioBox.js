import React from "react";
import styled from "styled-components";

export default styled(({ ratio = 1, as: As = "div", children, ...rest }) => {
  return (
    <As {...rest}>
      <Padder ratio={ratio} />
      <Inner>{children}</Inner>
    </As>
  );
})`
  position: relative;
`;

const Padder = styled.div`
  padding-top: ${p => p.ratio * 100 + "%"};
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
