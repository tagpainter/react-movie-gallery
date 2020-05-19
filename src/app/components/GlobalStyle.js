import { createGlobalStyle } from "styled-components";

import Justify from "./Justify";

export default createGlobalStyle`
  html[lang="ko"] ${Justify},
  html[lang="zh-cn"] ${Justify},
  html[lang="zh-tw"] ${Justify},
  html[lang="ja"] ${Justify} {
    text-align: justify;
  }
`;
