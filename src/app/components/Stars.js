import React from "react";
import styled from "styled-components";
import { opacify } from "polished";
import { mdiStar, mdiStarOutline } from "@mdi/js";

import Icon from "./Icon";

export default styled(({ value, ...rest }) => {
  return (
    <div {...rest}>
      {[0, 2, 4, 6, 8].map(i => (
        <Item key={i}>
          <BackStar />
          <Cutter ratio={Math.max(Math.min(value - i, 2), 0) / 2}>
            <FrontStar />
          </Cutter>
        </Item>
      ))}
    </div>
  );
})``;

const Item = styled.div`
  display: inline-block;
  position: relative;
  font-size: 1.5em;
`;

const BackStar = styled(Icon).attrs({
  path: mdiStarOutline
})`
  color: ${opacify(-0.75, "#eee")};
`;

const Cutter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0%;
  overflow: hidden;

  ${p => p.ratio && `width: ${p.ratio * 100}%; `}
`;

const FrontStar = styled(Icon).attrs({
  path: mdiStar
})`
  color: #fd3;
`;
