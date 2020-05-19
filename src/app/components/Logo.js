import React from "react";
import styled from "styled-components";

export default styled.a.attrs(p => ({
  children: (
    <>
      <First>MOVIE</First>
      <br />
      <Second>GALLERY</Second>
    </>
  )
}))`
  display: inline-block;
  line-height: 0.7;
  font-weight: bold;
  text-align: center;
`;

const First = styled.span`
  position: relative;
  letter-spacing: 0.32em;
  margin-right: -0.32em;
`;

const Second = styled.span`
  position: relative;
  font-size: 0.8em;
  letter-spacing: 0.2em;
  margin-right: -0.2em;
`;
