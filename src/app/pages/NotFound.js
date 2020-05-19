import React from "react";
import styled from "styled-components";

import { ScrollRestore } from "@/lib/scroll-restore";

import { useTranslation, LocaleLink, LocaleHelmet } from "@/app/lib/i18n";

import { FadeTransition } from "@/app/components/transitions";
import Button from "@/app/components/Button";
import Separator from "@/app/components/Separator";

export default ({ padder, staticContext }) => {
  if (staticContext) staticContext.status = 404;
  const { t } = useTranslation("main");

  return (
    <FadeTransition>
      <LocaleHelmet />
      <ScrollRestore />
      {padder && padder}
      <Wrap>
        <Inner>
          <h1>{t("NOT_FOUND_TITLE")}</h1>
          <p>{t("NOT_FOUND_DESCRIPTION")}</p>
          <Separator />
          <p>
            <Button as={LocaleLink} to="/">
              {t("GO_HOME")}
            </Button>
          </p>
        </Inner>
      </Wrap>
    </FadeTransition>
  );
};

const Inner = styled.div`
  padding: 6rem 1.5rem;

  h1 {
    font-size: 2.5rem;
    text-decoration: line-through;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 60rem;
  margin: 0 auto;
  text-align: center;
`;
