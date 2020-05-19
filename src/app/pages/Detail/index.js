import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { opacify } from "polished";
import { motion, AnimatePresence } from "framer-motion";
import { mdiCardsHeart } from "@mdi/js";

import { useLocalStorage } from "@/lib/react-utils";
import { useResources, imagePreloadResource } from "@/lib/resources";
import { ScrollRestore } from "@/lib/scroll-restore";

import { useApp } from "@/app/lib/app";
import { useI18n, useTranslation, LocaleHelmet } from "@/app/lib/i18n";

import NoSSR from "@/app/components/NoSSR";
import Justify from "@/app/components/Justify";
import Stars from "@/app/components/Stars";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";

import Castings from "./Castings";
import Similar from "./Similar";
import Gallery from "./Gallery";

export default ({ padder, ...rest }) => {
  const { isInitial } = useApp();
  const { locale } = useI18n();
  const { id, mediaType } = useParams();
  const { tmdb } = useResources();
  const [favourites, setFavourites] = useLocalStorage(
    "react-movie-gallery-favourites-" + locale.code,
    []
  );
  const isFavourited = React.useMemo(
    () => favourites.filter(f => f.id == id).length,
    [favourites]
  );

  const toggleFavourite = media => {
    if (favourites.filter(m => m.id == media.id).length) {
      setFavourites(favourites.filter(m => m.id !== media.id));
    } else {
      setFavourites([...favourites, { ...media, media_type: mediaType }]);
    }
  };

  const { t } = useTranslation("main");

  let media;
  if (id) media = tmdb.read(`/${mediaType}/${id}?language=${locale.code}`);

  if (!isInitial.current) {
    if (media.backdrop_path)
      imagePreloadResource.read(
        `https://image.tmdb.org/t/p/original${media.backdrop_path}`
      );

    if (media.poster_path)
      imagePreloadResource.read(
        `https://image.tmdb.org/t/p/w500${media.poster_path}`
      );
  }

  return (
    <Wrap
      as={motion.div}
      variants={variants}
      initial="hide"
      animate="show"
      exit="exit"
    >
      <LocaleHelmet>
        <title>{media.title || media.name}</title>
      </LocaleHelmet>
      <ScrollRestore />
      {media && (
        <>
          <Backdrop>
            {padder && padder}
            <BackdropImage
              as={motion.div}
              variants={backdropImageVariants}
              src={media.backdrop_path}
            />
            <BackdropFade />
          </Backdrop>
          <Top>
            <Poster as={motion.div} variants={posterVariants}>
              {media.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                />
              )}
            </Poster>
          </Top>
          <Summary>
            {(media.title || media.name) && (
              <h1>{media.title || media.name}</h1>
            )}
            {media.release_date && (
              <ReleaseYear>{media.release_date.split("-")[0]}</ReleaseYear>
            )}
            <Genres>
              {media.genres.map((genre, i, arr) => (
                <React.Fragment key={genre.id}>
                  <Genre>{genre.name}</Genre>
                  {i < arr.length - 1 && "·"}
                </React.Fragment>
              ))}
            </Genres>
            <SummaryStars>
              <Stars value={media.vote_average} /> {media.vote_average}
            </SummaryStars>
            <AnimatePresence>
              <NoSSR>
                <motion.div
                  variants={{
                    hide: { opacity: 0, height: 0 },
                    show: { opacity: 1, height: "auto" }
                  }}
                  initial="hide"
                  animate="show"
                  style={{ overflow: "hidden" }}
                >
                  <SummaryButtons>
                    <Button
                      className={isFavourited && "active"}
                      onClick={() => toggleFavourite(media)}
                    >
                      <Icon path={mdiCardsHeart} />{" "}
                      {isFavourited
                        ? t("DETAIL_ADDED_FAVOURITES")
                        : t("DETAIL_ADD_FAVOURITES")}
                    </Button>
                  </SummaryButtons>
                </motion.div>
              </NoSSR>
            </AnimatePresence>

            {media.tagline && <h2>{media.tagline}</h2>}
            {media.overview && <Justify>{media.overview}</Justify>}
          </Summary>
          <Castings id={id} mediaType={mediaType} />
          <Gallery id={id} mediaType={mediaType} />
          <Similar id={id} mediaType={mediaType} />
        </>
      )}
    </Wrap>
  );
};

const Genres = styled.div``;

const Genre = styled.div`
  display: inline-block;
  margin: 0 0.33rem;
`;

const ReleaseYear = styled.div`
  font-style: italic;
  color: ${opacify(-0.33, "#eee")};
  font-size: 1.5rem;
`;

const SummaryStars = styled.div``;

const SummaryButtons = styled.div``;

const Summary = styled.div`
  position: relative;
  padding: 3rem 1.5rem;
  padding-bottom: 2rem;
  text-align: center;
  max-width: 50rem;
  margin: 0 auto;

  h1 {
    margin: 0;
    font-size: 3rem;
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.2;
  }
  ${Justify} {
    margin: 0;
    margin-bottom: 1rem;
    color: ${opacify(-0.33, "#eee")};
    text-align-last: center;
  }
  ${Stars} {
    display: inline-block;
    vertical-align: middle;
  }
  ${SummaryStars} {
    margin-bottom: 2rem;
  }
  ${SummaryButtons} {
    margin-bottom: 2rem;
  }
  ${ReleaseYear} {
    margin-bottom: 2rem;
  }
`;

const backdropImageVariants = {
  hide: { scale: 1.33, opacity: 0, transition: { duration: 0.4 } },
  show: { scale: 1, opacity: 0.5, transition: { duration: 0.66 } },
  exit: { opacity: 0 }
};

const BackdropImage = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-position: center center;

  ${p =>
    p.src &&
    `background-image: url(https://image.tmdb.org/t/p/original${p.src}); `}}
`;

const BackdropFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-image: linear-gradient(to top, #222, ${opacify(-1, "#222")});
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50vh;
  min-height: 30rem;
  background-color: #111;
  overflow: hidden;
`;

const Top = styled.div`
  position: relative;
  padding: 3rem;
  padding-bottom: 0;
`;

const Poster = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 14rem;
  background-color: #222;

  img {
    display: block;
    width: 100%;
  }
`;

const posterVariants = {
  hide: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

const Wrap = styled.div``;

const variants = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren" } },
  exit: { opacity: 0, transition: { when: "afterChildren" } }
};
