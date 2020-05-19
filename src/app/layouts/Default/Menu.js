import React from "react";
import styled from "styled-components";

import { createNavLink } from "@/app/lib/router";
import { LocaleNavLink, useTranslation } from "@/app/lib/i18n";

export default () => {
  const { t } = useTranslation("main");

  return (
    <Wrap>
      <Item exact to="/">
        {t("MENU_HOME")}
      </Item>
      <Item to="/discover">{t("MENU_DISCOVER")}</Item>
      <Item to="/favourites">{t("MENU_FAVOURITES")}</Item>
      <Item to="/about">{t("MENU_ABOUT")}</Item>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  top: 7rem;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  text-align: center;
  padding-right: 1.5rem;
`;

const Item = createNavLink(styled(LocaleNavLink)`
  display: inline-block;
  height: 2.5rem;
  padding-top: 0.2em;
  margin-left: 1.5rem;

  transition: padding 0.15s ease, color 0.15s ease, background-color 0.15s ease;

  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 100%;
  }
  &:hover {
    font-weight: bold;
  }
`)`
  background-color: #eee;
  color: #333;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-weight: bold;
`;
