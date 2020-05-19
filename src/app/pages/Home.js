import React from "react";
import styled from "styled-components";
import { opacify } from "polished";
import { motion } from "framer-motion";

import { useResources, imagePreloadResource } from "@/lib/resources";
import { ScrollRestore } from "@/lib/scroll-restore";

import { useApp } from "@/app/lib/app";
import {
  useTranslation,
  useI18n,
  LocaleLink,
  LocaleHelmet
} from "@/app/lib/i18n";

import Justify from "@/app/components/Justify";
import Thumb from "@/app/components/Thumb";
import Button from "@/app/components/Button";

const mock_movie = {
  overview: "운명을 바꿀 최후의 게임이 시작된다",
  title: "어벤저스 - 엔드게임",
  backdrop_path: "/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg"
};

export default ({ padder }) => {
  const { isInitial } = useApp();
  const { locale } = useI18n();
  const { tmdb } = useResources();
  const { t } = useTranslation("main");

  const trending = tmdb.read(`/trending/movie/week?language=${locale.code}`);
  const now_playings = tmdb.read(`/movie/now_playing?language=${locale.code}`);
  let today;
  if (trending.todayId)
    today = tmdb.read(`/movie/${trending.todayId}?language=${locale.code}`);

  if (!isInitial.current && today && today.backdrop_path)
    imagePreloadResource.read(
      `https://image.tmdb.org/t/p/original${today.backdrop_path}`
    );

  return (
    <Wrap
      as={motion.div}
      variants={variants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <LocaleHelmet />
      <ScrollRestore />
      <Today padder={padder} today={today} />
      <Section>
        <Title>{t("HOME_TRENDINGS")}</Title>
        <Items>
          {trending.results.map(
            item =>
              item.poster_path && (
                <Item key={item.id}>
                  <Thumb
                    forwardedAs={LocaleLink}
                    to={`/movie/${item.id}`}
                    title={item.title}
                    image={item.poster_path}
                  />
                </Item>
              )
          )}
        </Items>
      </Section>
      <Section>
        <Title>{t("HOME_NOW_PLAYING")}</Title>
        <Items>
          {now_playings.results.map(
            item =>
              item.poster_path && (
                <Item key={item.id}>
                  <Thumb
                    forwardedAs={LocaleLink}
                    to={`/movie/${item.id}`}
                    title={item.title}
                    image={item.poster_path}
                  />
                </Item>
              )
          )}
        </Items>
      </Section>
    </Wrap>
  );
};

const Today = ({ today, padder }) => {
  return (
    <TodayWrap>
      <TodayImage src={today.backdrop_path} />
      <TodayFade />
      {padder && padder}
      <TodayMain>
        {today.tagline && <h1>{today.tagline}</h1>}
        {today.title && <h2>{today.title}</h2>}
        {today.overview && <Justify>{today.overview}</Justify>}
        <Button as={LocaleLink} to={`/movie/${today.id}`}>
          SEE MORE
        </Button>
      </TodayMain>
    </TodayWrap>
  );
};

const TodayWrap = styled.div`
  position: relative;
`;

const TodayImage = styled.div`
  opacity: 0.5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  ${p =>
    p.src &&
    `background-image: url(https://image.tmdb.org/t/p/original${p.src}); `}
`;

const TodayMain = styled.div`
  position: relative;
  padding: 3rem 1.66rem;
  padding-bottom: 6rem;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 3rem;
    max-width: 30rem;
    margin-bottom: 1.33rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    margin-bottom: 1.33rem;
  }
  ${Justify} {
    margin: 0;
    margin-bottom: 1.33rem;
    max-width: 40rem;
    color: ${opacify(-0.33, "#eee")};
  }
`;

const TodayFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20rem;
  background-image: linear-gradient(to top, #222, ${opacify(-1, "#222")});
`;

const Section = styled.div`
  margin-top: 1.66rem;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  margin: 0;
  padding: 1.66rem;
  padding-top: 0;
  font-size: 1rem;
  font-weight: bold;
  max-width: 60rem;
  margin: 0 auto;
  width: 100%;
`;

const Items = styled.div`
  margin-bottom: 3rem;
  padding-top: 0.33rem;
  padding-left: 0.33rem;
  max-width: 75rem;
  margin: 0 auto;
  width: 100%;

  &:after {
    content: "";
    display: table;
    width: 100%;
  }
`;

const Item = styled.div`
  float: left;
  width: ${100 / 7}%;
  padding-right: 0.33rem;
  padding-bottom: 0.33rem;

  @media screen and (max-width: 60rem) {
    width: ${100 / 6}%;
  }
  @media screen and (max-width: 50rem) {
    width: ${100 / 5}%;
  }
  @media screen and (max-width: 40rem) {
    width: ${100 / 4}%;
  }
  @media screen and (max-width: 30rem) {
    width: ${100 / 3}%;
  }
`;

const Wrap = styled.div`
  position: relative;
`;

const variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 }
};
