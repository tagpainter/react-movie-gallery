import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { opacify } from "polished";

import { useResources, imagePreloadResource } from "@/lib/resources";
import { ScrollRestore } from "@/lib/scroll-restore";

import { useApp } from "@/app/lib/app";
import { useI18n, LocaleHelmet } from "@/app/lib/i18n";

import RatioBox from "@/app/components/RatioBox";
import Stars from "@/app/components/Stars";

export default ({ padder }) => {
  const { isInitial } = useApp();
  const { locale } = useI18n();
  const { id } = useParams();
  const { tmdb } = useResources();

  const person = tmdb.read(`/person/${id}?language=${locale.code}`);

  console.log(person);

  return (
    <Wrap
      as={motion.div}
      variants={vars}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <LocaleHelmet>
        <title>person</title>
      </LocaleHelmet>
      <ScrollRestore />
      {padder && padder}
      <Info>
        <InfoLeft>
          <InfoProfile>
            <img
              src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
            />
            <InfoProfileFade />
          </InfoProfile>
        </InfoLeft>
        <InfoRight>
          <Header>
            {person.name && <h1>{person.name}</h1>}
            {person.known_for_department && (
              <h2>{person.known_for_department}</h2>
            )}
          </Header>
          <Infos>
            <dl>
              <dt>Popularity</dt>
              <dd>
                <Stars value={person.popularity} />{" "}
                <strong>{person.popularity}</strong>
              </dd>
            </dl>
            {person.birthday && (
              <dl>
                <dt>Birthday</dt>
                <dd>{person.birthday}</dd>
              </dl>
            )}
            {person.place_of_birth && (
              <dl>
                <dt>Place of birth</dt>
                <dd>{person.place_of_birth}</dd>
              </dl>
            )}
            {person.gender && (
              <dl>
                <dt>Gender</dt>
                <dd>{person.gender == 1 ? "Female" : "Male"}</dd>
              </dl>
            )}
            {person.also_known_as.length > 0 && (
              <dl>
                <dt>Also known as</dt>
                <dd>{person.also_known_as.join(", ")}</dd>
              </dl>
            )}
          </Infos>
          {person.biography && <Bio>{person.biography}</Bio>}
        </InfoRight>
      </Info>
    </Wrap>
  );
};

const Info = styled.div`
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-bottom: 3rem;

  &:after {
    content: "";
    display: table;
    width: 100%;
  }
`;

const InfoProfileFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background-image: linear-gradient(to top, #222, ${opacify(-1, "#222")});
`;

const InfoLeft = styled.div`
  position: sticky;
  top: 1.5rem;
  width: 18rem;
  min-height: 28rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 45rem) {
    float: left;
  }
`;

const InfoProfile = styled.div`
  position: relative;
  background-color: #111;

  img {
    display: block;
    width: 100%;
  }
`;

const Infos = styled.div`
  margin-top: 2rem;

  @media screen and (min-width: 30rem) {
    column-count: 2;
  }
  @media screen and (min-width: 45rem) {
    column-count: 1;
  }
  @media screen and (min-width: 55rem) {
    column-count: 2;
  }

  dl {
    break-inside: avoid;
    margin-bottom: 0.66rem;
  }
  dd {
    color: ${opacify(-0.5, "#eee")};
  }
  dt {
    font-size: 0.9rem;
    margin-bottom: 0.33rem;
  }
`;

const InfoRight = styled.div`
  display: block;
  background-image: linear-gradient(
    to bottom,
    ${opacify(-1, "#222")} 0%,
    #222 15rem
  );

  @media screen and (max-width: 44.99rem) {
    position: relative;
    clear: left;
    margin-top: -10rem;
    padding-left: 1.5rem;
  }
  @media screen and (min-width: 45rem) {
    clear: none;
    float: left;
    width: calc(100% - 18rem);
    padding-left: 2rem;
  }

  ${Stars} {
    display: inline-block;
    vertical-align: middle;
  }
  p {
    color: ${opacify(-0.5, "#eee")};
  }
  h1 {
    font-size: 2.33rem;
  }
`;

const Header = styled.div`
  h2 {
    font-style: italic;
    font-weight: normal;
    color: ${opacify(-0.5, "#eee")};
  }
`;

const Bio = styled.p`
  margin-top: 2rem;
`;

const Wrap = styled.div``;

const vars = {
  hide: { opacity: 0, transition: { when: "afterChildren" } },
  show: { opacity: 1, transition: { when: "beforeChildren" } }
};
