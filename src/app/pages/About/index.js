import React from "react";
import styled from "styled-components";
import { opacify } from "polished";

import { ScrollRestore } from "@/lib/scroll-restore";

import {
  useI18n,
  useTranslation,
  LocaleLink,
  LocaleHelmet
} from "@/app/lib/i18n";

import { FadeTransition } from "@/app/components/transitions";

export default ({ padder }) => {
  const { locale } = useI18n();

  const html = React.useMemo(() => {
    let result;
    try {
      result = require(`docs/${locale.code}/README.md`);
    } catch (error) {
      result = require("docs/en/README.md");
    }
    return result;
  }, [locale.code]);

  return (
    <FadeTransition>
      <LocaleHelmet />
      <ScrollRestore />
      {padder && padder}
      <Main dangerouslySetInnerHTML={{ __html: html }} />
    </FadeTransition>
  );
};

const Main = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  hr {
    margin: 3rem 0;
    border: 0;
    background-color: transparent;
  }
  p {
    color: ${opacify(-0.5, "#eee")};
  }
`;
