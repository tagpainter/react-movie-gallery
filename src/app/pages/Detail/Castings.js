import React from "react";
import styled from "styled-components";
import { opacify } from "polished";

import { useScrollX } from "@/lib/react-utils";
import { useResources } from "@/lib/resources";

import { useI18n, useTranslation, LocaleLink } from "@/app/lib/i18n";

import Thumb from "@/app/components/Thumb";

export default ({ mediaType, id }) => {
  const { locale } = useI18n();
  const { tmdb } = useResources();
  const { t } = useTranslation("main");
  const listEl = React.useRef(null);

  useScrollX(listEl);
  let credits;
  if (id)
    credits = tmdb.read(`/${mediaType}/${id}/credits?language=${locale.code}`);

  return credits.cast.length ? (
    <Wrap>
      <Title>{t("DETAIL_CASTINGS")}</Title>
      <List ref={listEl}>
        <Inner>
          {credits.cast.map(item => (
            <Item key={item.id}>
              <Thumb
                forwardedAs={LocaleLink}
                to={`/person/${item.id}`}
                title={item.name}
                subtitle={item.character}
                image={item.profile_path}
                backgroundColor="#252525"
              />
            </Item>
          ))}
        </Inner>
      </List>
    </Wrap>
  ) : null;
};

const Wrap = styled.div`
  position: relative;
  background-color: ${opacify(-0.33, "#252525")};
  color: #eee;
  backdrop-filter: blur(1rem);
`;

const Title = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem;
  padding-top: 3rem;
  font-weight: bold;
  padding-bottom: 0;
`;

const List = styled.div`
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  padding-bottom: 1.5rem;

  @media screen and (min-width: 50rem) {
    padding-left: calc((100% - 50rem) / 2);
    padding-right: calc((100% - 50rem) / 2);
  }
`;

const Inner = styled.div`
  display: inline-block;
  text-align: left;
  padding: 1.3rem;

  @media screen and (min-width: 50rem) {
    min-width: 50rem;
  }
`;

const Item = styled.div`
  display: inline-block;
  width: 9rem;
  margin: 0.2rem;
  white-space: initial;
`;
