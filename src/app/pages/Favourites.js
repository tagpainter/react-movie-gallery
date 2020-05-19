import React from "react";
import styled from "styled-components";
import { opacify } from "polished";
import { mdiDelete } from "@mdi/js";

import { useLocalStorage } from "@/lib/react-utils";

import { useI18n, useTranslation, LocaleLink } from "@/app/lib/i18n";

import { FadeTransition } from "@/app/components/transitions";
import Thumb from "@/app/components/Thumb";
import NoSSR from "@/app/components/NoSSR";
import Stars from "@/app/components/Stars";
import Icon from "@/app/components/Icon";
import Spinner from "@/app/components/Spinner";

export default ({ padder }) => {
  const { locale } = useI18n();
  const [favourites, setFavourites] = useLocalStorage(
    "react-movie-gallery-favourites-" + locale.code,
    []
  );
  const { t } = useTranslation("main");

  const deleteFavourite = media => {
    setFavourites(favourites.filter(m => m.id !== media.id));
  };

  return (
    <FadeTransition>
      <Wrap>
        {padder && padder}
        <Header>
          <h1>{t("FAVOURITES_TITLE")}</h1>
          <p>{t("FAVOURITES_DESCRIPTION")}</p>
        </Header>
        <Main>
          <NoSSR
            onSSR={
              <Description>
                <Spinner />
              </Description>
            }
          >
            {favourites.length ? (
              <Items>
                {favourites.map(media => (
                  <Item key={media.type + "-" + media.id}>
                    <ItemLeft>
                      <Thumb
                        forwardedAs={LocaleLink}
                        to={`/${media.media_type}/${media.id}`}
                        image={media.poster_path}
                      />
                    </ItemLeft>
                    <ItemMain>
                      <h1>
                        <LocaleLink to={`/${media.media_type}/${media.id}`}>
                          {media.title || media.name}
                        </LocaleLink>
                      </h1>
                      {media.genres && (
                        <ItemGenres>
                          {media.genres.map((genre, i, arr) => (
                            <React.Fragment key={genre.id}>
                              {genre.name}
                              {i < arr.length - 1 && "·"}
                            </React.Fragment>
                          ))}
                        </ItemGenres>
                      )}
                      <ItemStars>
                        <Stars value={media.vote_average} />{" "}
                        {media.vote_average}
                      </ItemStars>
                    </ItemMain>
                    <ItemRight>
                      <ItemDelete onClick={() => deleteFavourite(media)}>
                        <Icon path={mdiDelete} />
                      </ItemDelete>
                    </ItemRight>
                  </Item>
                ))}
              </Items>
            ) : (
              <Description>{t("FAVOURITES_NO_ITEMS")}</Description>
            )}
          </NoSSR>
        </Main>
      </Wrap>
    </FadeTransition>
  );
};

const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 60rem;
  padding: 1.5rem;
`;

const Wrap = styled.div`
  position: relative;
  padding: 1.5rem 0;
`;

const Items = styled.div``;

const Item = styled.div`
  display: table;
  width: 100%;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.33rem;
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = styled.div`
  padding: 1.5rem;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;

  p {
    color: ${opacify(-0.5, "#eee")};
  }
`;

const ItemLeft = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 6.5rem;
  padding-right: 1.5rem;
`;

const ItemMain = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const ItemRight = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-left: 1.5rem;
  width: 1%;
`;

const Description = styled.div`
  padding: 3rem 0;
  color: ${opacify(-0.5, "#eee")};
  text-align: center;
  white-space: pre-line;
`;

const ItemGenres = styled.p`
  color: ${opacify(-0.5, "#eee")};
`;

const ItemStars = styled.div`
  color: ${opacify(-0.5, "#eee")};

  ${Stars} {
    display: inline-block;
    vertical-align: middle;
  }
`;

const ItemDelete = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: ${opacify(-0.9, "#eee")};
  border-radius: 100rem;
  border: 0;
  color: #eee;
  padding: 0;

  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${opacify(-0.8, "#eee")};
  }
`;
