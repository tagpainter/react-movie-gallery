import React from "react";
import styled from "styled-components";
import { opacify } from "polished";

import Logo from "@/app/components/Logo";

export default styled(({ ...rest }) => {
  return (
    <div {...rest}>
      <Logo />
      <p>Made by Tagpainter. Powered by TMDB API.</p>
    </div>
  );
})`
  padding: 2rem 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: ${opacify(-0.5, "#eee")};
`;
