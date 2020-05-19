import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { opacify } from "polished";
import qs from "qs";
import { mdiPlay } from "@mdi/js";

import { useScrollX } from "@/lib/react-utils";
import { useResources } from "@/lib/resources";

import {
  useI18n,
  useTranslation,
  LocaleNavLink,
  LocaleLink
} from "@/app/lib/i18n";

import Icon from "@/app/components/Icon";

export default ({ mediaType, id }) => {
  const location = useLocation();
  const { locale } = useI18n();
  const { tmdb } = useResources();
  const { t } = useTranslation("main");
  const listEl = React.useRef(null);
  const search = qs.parse(location.search.replace("?", ""));

  if (!search.gallery) search.gallery = "videos";

  useScrollX(listEl);

  let imagesRes,
    videosRes,
    backdrops = [],
    posters = [],
    videos = [];

  if (id) {
    imagesRes = tmdb.read(`/${mediaType}/${id}/images?language=${locale.code}`);
    videosRes = tmdb.read(`/${mediaType}/${id}/videos?language=${locale.code}`);
  }

  if (imagesRes) {
    backdrops = imagesRes.backdrops;
    posters = imagesRes.posters;
  }

  if (videosRes) {
    videos = videosRes.results;
  }

  return (
    <Wrap>
      <Title>{t("DETAIL_GALLERY")}</Title>
      <Tabs>
        <Tab
          isActive={() => search.gallery == "videos"}
          replace
          to={`/${mediaType}/${id}?gallery=videos`}
        >
          비디오 <TabCount>{videos.length}</TabCount>
        </Tab>
        <Tab
          isActive={() => search.gallery == "images"}
          replace
          to={`/${mediaType}/${id}?gallery=images`}
        >
          이미지 <TabCount>{backdrops.length}</TabCount>
        </Tab>
        <Tab
          isActive={() => search.gallery == "posters"}
          replace
          to={`/${mediaType}/${id}?gallery=posters`}
        >
          포스터 <TabCount>{posters.length}</TabCount>
        </Tab>
      </Tabs>
      <List ref={listEl}>
        <Inner style={{ display: search.gallery !== "images" && "none" }}>
          {backdrops.length ? (
            backdrops.map((item, i) => (
              <Item
                key={item.file_path + "-" + i}
                as={LocaleLink}
                to={`/${mediaType}/${id}/image${item.file_path}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w${
                    item.aspect_ratio > 1 ? 500 : 300
                  }${item.file_path}`}
                />
              </Item>
            ))
          ) : (
            <NoResults>이미지가 없습니다.</NoResults>
          )}
        </Inner>
        <Inner style={{ display: search.gallery !== "posters" && "none" }}>
          {posters.length ? (
            posters.map((item, i) => (
              <Item
                key={item.file_path + "-" + i}
                as={LocaleLink}
                to={`/${mediaType}/${id}/image${item.file_path}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w${
                    item.aspect_ratio > 1 ? 500 : 300
                  }${item.file_path}`}
                />
              </Item>
            ))
          ) : (
            <NoResults>포스터가 없습니다.</NoResults>
          )}
        </Inner>
        <Inner
          style={{
            display: search.gallery !== "videos" && "none"
          }}
        >
          {videos.length ? (
            videos.map((item, i) => (
              <Item
                key={item.key + "-" + i}
                as={LocaleLink}
                to={`/${mediaType}/${id}/${item.site.toLowerCase()}/${
                  item.key
                }`}
              >
                <img src={`http://i.ytimg.com/vi/${item.key}/sddefault.jpg`} />
                <PlayIconHolder>
                  <Icon path={mdiPlay} />
                </PlayIconHolder>
              </Item>
            ))
          ) : (
            <NoResults>비디오가 없습니다.</NoResults>
          )}
        </Inner>
      </List>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  background-color: #151515;
  color: #eee;
`;

const NoResults = styled.div`
  padding: 6.15rem 2rem;
  text-align: center;
  color: ${opacify(-0.5, "#eee")};
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

const Tabs = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem;
  font-weight: bold;
  padding-bottom: 0;
`;

const Tab = styled(LocaleNavLink)`
  display: inline-block;
  border-bottom: 3px solid transparent;
  color: ${opacify(-0.5, `#eee`)};
  margin-right: 0.5rem;

  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: #eee;
  }
  &.active {
    color: #eee;
    border-color: currentColor;
  }
`;

const TabCount = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: 0 0.2em;
  border-radius: 0.2em;
  font-size: 0.9rem;
  line-height: 1.2;
  border: 0.1em solid currentColor;
  color: currentColor;
  min-width: 1.66em;
  text-align: center;
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

const Item = styled.a`
  display: inline-block;
  cursor: pointer;
  position: relative;
  height: 13rem;
  margin: 0.2rem;
  white-space: initial;
  overflow: hidden;

  img {
    height: 100%;

    transition: opacity 0.33s ease, transform 0.33s ease;
  }

  &:hover {
    img {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
`;

const PlayIconHolder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
`;
