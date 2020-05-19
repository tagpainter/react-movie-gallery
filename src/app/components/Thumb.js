import React from "react";
import styled from "styled-components";
import { opacify } from "polished";

import RatioBox from "./RatioBox";

const Image = styled.div.attrs(p => ({
  style: {
    backgroundImage: p.src && `url(https://image.tmdb.org/t/p/w300${p.src})`
  }
}))`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;

  opacity: 1;
  transition: transform 0.33s ease, opacity 0.33s ease;
`;

const Fade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 66%;
  background-image: linear-gradient(
    to top,
    ${p => p.backgroundColor},
    ${p => opacify(-1, p.backgroundColor)}
  );
`;

const Summary = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;

  h1 {
    font-size: 1rem;
    margin: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
  }

  h2 {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    font-weight: normal;
    font-style: italic;
    color: ${opacify(-0.5, "#eee")};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
  }
`;

export default styled(
  ({ as = "div", title, subtitle, image, backgroundColor, ...rest }) => {
    return (
      <RatioBox forwardedAs={as} ratio={3 / 2} {...rest}>
        <Image src={image} />
        <Fade backgroundColor={backgroundColor || "#222"} />
        <Summary>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
        </Summary>
      </RatioBox>
    );
  }
)`
  cursor: pointer;
  display: block;
  background-color: #111;
  overflow: hidden;

  &:hover {
    ${Image} {
      transform: scale(1.2);
      opacity: 0.5;
    }
  }
`;
