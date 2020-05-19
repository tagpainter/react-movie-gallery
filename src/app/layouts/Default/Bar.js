import React from "react";
import styled from "styled-components";
import { opacify } from "polished";
import { motion } from "framer-motion";
import { mdiMagnify, mdiClose } from "@mdi/js";
import { useDebounce } from "react-use";

import { useMedia } from "@/lib/react-utils";
import { useResources } from "@/lib/resources";

import { useTranslation, useI18n, LocaleLink } from "@/app/lib/i18n";

import Icon from "@/app/components/Icon";
import Logo from "@/app/components/Logo";
import Spinner from "@/app/components/Spinner";

export default () => {
  const { t } = useTranslation("main");

  const isMobile = useMedia(["(max-width: 35rem)"], [true], false);
  const [isSearchActive, setSearchActive] = React.useState(false);

  const [searchQuery, setSearchQuery] = React.useState("");
  const [query, setQuery] = React.useState(searchQuery);

  useDebounce(() => setQuery(searchQuery), 500, [searchQuery]);

  return (
    <Wrap>
      <Cover
        as={motion.div}
        variants={coverVariants}
        initial="hide"
        animate={isSearchActive ? "show" : "hide"}
      />
      <Inner>
        <Left>
          <LogoCutter
            as={motion.div}
            variants={logoCutterVariants}
            initial="hide"
            animate={isSearchActive && isMobile ? "folded" : "show"}
            transition={{ duration: 0.1 }}
          >
            <Logo as={LocaleLink} to="/" />
          </LogoCutter>
        </Left>
        <Right>
          <SearchCutter
            as={motion.div}
            variants={searchCutterVariants}
            initial="hide"
            animate={isSearchActive ? "active" : "show"}
            exit="hide"
          >
            <SearchWrap as={motion.div} variants={searchWrapVariants}>
              {!isSearchActive && (
                <SearchButton>
                  <Icon path={mdiMagnify} />
                </SearchButton>
              )}
              <SearchInput
                placeholder={t("SEARCH_PLACEHOLDER")}
                onFocus={() => setSearchActive(true)}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {isSearchActive && (
                <SearchButton onClick={() => setSearchActive(false)}>
                  <Icon path={mdiClose} />
                </SearchButton>
              )}
            </SearchWrap>
          </SearchCutter>
        </Right>
      </Inner>
      <ResultWrap
        as={motion.div}
        variants={resultWrapVariants}
        initial="hide"
        animate={isSearchActive ? "show" : "hide"}
      >
        <ResultInner>
          <React.Suspense
            fallback={
              <ResultPending>
                <Spinner />
              </ResultPending>
            }
          >
            <Results query={query} onClose={() => setSearchActive(false)} />
          </React.Suspense>
        </ResultInner>
      </ResultWrap>
    </Wrap>
  );
};

const Inner = styled.div`
  display: table;
  width: 100%;
`;

const LogoCutter = styled.div`
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  padding-bottom: 0.2em;
`;

const logoCutterVariants = {
  hide: { opacity: 0, width: "0rem" },
  show: { opacity: 1, width: "10rem" },
  folded: { opacity: 1, width: "0rem" }
};

const Left = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 1%;
  font-size: 1.66rem;
  padding-left: 1.5rem;

  ${Logo} {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Right = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  padding-right: 1.5rem;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 3rem;
  text-align: center;
  border: 0;
  background-color: transparent;
  color: inherit;
  font-size: 1.2rem;
`;

const SearchInput = styled.input`
  position: relative;
  background-color: transparent;
  color: #eee;
  padding: 0.75rem;
  border: 0;
  text-align: right;
  outline: none;
  padding-right: 3rem;
  width: 100%;

  ::placeholder {
    color: ${opacify(-0.5, "#eee")};
    font-style: italic;
  }
`;

const SearchWrap = styled.div`
  position: relative;
  border: 3px solid;
`;

const SearchCutter = styled.div`
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  width: 100%;
`;

const searchCutterVariants = {
  hide: { opacity: 0, maxWidth: "0rem" },
  show: { opacity: 1, maxWidth: "15rem" },
  active: { opacity: 1, maxWidth: "30rem" }
};

const searchWrapVariants = {
  show: { borderColor: opacify(-0.5, "#eee"), color: opacify(-0.5, "#eee") },
  active: { borderColor: "#eee", color: "#eee" }
};

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${opacify(-0.2, "#222")};
  backdrop-filter: blur(1rem);
`;

const coverVariants = {
  hide: { opacity: 0, transitionEnd: { display: "none" } },
  show: { opacity: 1, display: "block" }
};

const ResultWrap = styled.div`
  position: relative;
  max-width: 60rem;
  margin: 0 auto;
  width: 100%;

  transition: padding 0.33s ease;

  @media screen and (min-width: 35rem) {
    padding-left: 10rem;
  }

  &:after {
    content: "";
    display: table;
    width: 100%;
  }
`;

const ResultInner = styled.div`
  max-width: 33rem;
  float: right;
  width: 100%;
`;

const resultWrapVariants = {
  hide: { opacity: 0, transitionEnd: { display: "none" } },
  show: { opacity: 1, display: "block" }
};

const Wrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  height: 4.5rem;
  margin-top: 2.5rem;
`;

const Results = styled(({ query, onClose }) => {
  const { locale } = useI18n();
  const { tmdb } = useResources();
  const { t } = useTranslation("main");

  const result = query
    ? tmdb.read(`/search/multi?language=${locale.code}&query=${query}`).results
    : [];

  return result.length ? (
    <ResultList>
      {result.map(item => (
        <ResultItem
          as={LocaleLink}
          to={`/${item.media_type}/${item.id}`}
          key={item.id}
          onClick={() => onClose()}
        >
          <strong>
            {t("SEARCH_MEDIA_TYPE_" + item.media_type.toUpperCase())}
          </strong>{" "}
          {["person", "tv"].includes(item.media_type) ? item.name : item.title}
        </ResultItem>
      ))}
    </ResultList>
  ) : query ? (
    <NoResult>{t("SEARCH_NO_RESULT")}</NoResult>
  ) : (
    <NoResult>{t("SEARCH_NO_QUERY")}</NoResult>
  );
})``;

const NoResult = styled.div`
  padding: 3rem 1.5rem;
  color: ${opacify(-0.5, "#eee")};
  font-style: italic;
  text-align: center;
`;

const ResultList = styled.div`
  padding: 1rem 0;
`;

const ResultItem = styled.a`
  display: block;
  padding: 0.33rem 1.5rem;

  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${opacify(-0.9, "#eee")};
  }

  strong {
    display: inline-block;
    margin-right: 0.5rem;
    font-size: 0.9rem;
    border: 1px solid ${opacify(-0.5, "#eee")};
    padding: 0 0.2rem;
    border-radius: 0.2rem;
    color: ${opacify(-0.5, "#eee")};
  }
`;

const ResultPending = styled.div`
  padding: 3rem 1.5rem;
  text-align: center;
`;
