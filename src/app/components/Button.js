import styled from "styled-components";

import Icon from "./Icon";

export default styled.button`
  display: inline-block;
  padding: 0.75rem 3rem;
  background-color: #eee;
  border: 0;
  color: #222;
  font-size: 1.33rem;
  font-weight: bold;

  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover,
  &.active {
    background-color: #111;
    color: #eee;
  }

  ${Icon} {
    display: inline-block;
    vertical-align: middle;
  }
`;
