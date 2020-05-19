import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { mdiWeb, mdiChevronDown } from "@mdi/js";

import { useOnClickOutside } from "@/lib/react-utils";

import { LOCALE_CODES, useI18n, convertLocalePath } from "@/app/lib/i18n";
import Icon from "@/app/components/Icon";

export default styled(({ ...rest }) => {
  const { locale } = useI18n();
  const location = useLocation();
  const [showLangDropdown, setShowLangDropdown] = React.useState(false);
  const langListEl = React.useRef(null);
  const langName = LOCALE_CODES[locale.code] || "";

  useOnClickOutside(langListEl, () => setShowLangDropdown(false));

  return (
    <div {...rest}>
      <Lang>
        <LangButton onClick={() => setShowLangDropdown(true)}>
          <Icon path={mdiWeb} />
          <LangTitle>{langName}</LangTitle>
          <ChevronIcon path={mdiChevronDown} />
        </LangButton>
        <LangList
          as={motion.div}
          ref={langListEl}
          variants={langListVariants}
          initial="hide"
          animate={showLangDropdown ? "show" : "hide"}
        >
          {Object.entries(LOCALE_CODES).map(([key, title]) => (
            <LangItem
              as={Link}
              key={key}
              to={convertLocalePath(key, location.pathname)}
              onClick={() => setShowLangDropdown(false)}
            >
              {title}
            </LangItem>
          ))}
        </LangList>
      </Lang>
    </div>
  );
})`
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
  height: 0;
  padding: 0 1.5rem;
  text-align: right;
`;

const ChevronIcon = styled(Icon)``;

const LangTitle = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const LangButton = styled.button`
  display: block;
  float: right;
  background-color: #111;
  color: #eee;
  padding: 0.33rem 1rem;
  border: 0;
  font-size: 0.8rem;

  ${Icon} {
    display: inline-block;
    vertical-align: middle;
  }
  ${LangTitle} {
    margin-left: 0.5rem;
  }
  ${ChevronIcon} {
    position: relative;
    margin-right: -0.5em;
  }
`;

const LangItem = styled.a`
  display: block;
  padding: 0.33rem 1.5rem;

  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: #eee;
    color: #333;
  }
`;

const LangList = styled.div`
  float: right;
  clear: right;
  min-width: 15rem;
  padding: 0.5rem 0;
  background-color: #111;
  color: #eee;
`;

const Lang = styled.div`
  position: relative;
  z-index: 1;
`;

const langListVariants = {
  hide: { opacity: 0, visibility: "hidden" },
  show: { opacity: 1, visibility: "visible" }
};
