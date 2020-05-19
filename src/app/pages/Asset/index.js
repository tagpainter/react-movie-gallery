import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { mdiClose } from "@mdi/js";
import YouTube from "react-youtube";

import { LocaleLink } from "@/app/lib/i18n";

import Icon from "@/app/components/Icon";

export default () => {
  const history = useHistory();
  const { id, mediaType, assetType, assetKey } = useParams();

  return (
    <Wrap>
      <Close
        as={LocaleLink}
        to={`/${mediaType}/${id}`}
        onClick={event => {
          event.preventDefault();
          history.go(-1);
        }}
      >
        <Icon path={mdiClose} />
      </Close>
      {assetType == "image" ? (
        <ImageWrap>
          <ImageFallback
            src={`https://image.tmdb.org/t/p/original/${assetKey}`}
          >
            <Image src={`https://image.tmdb.org/t/p/original/${assetKey}`} />
          </ImageFallback>
        </ImageWrap>
      ) : assetType == "youtube" ? (
        <YouTubeWrap>
          <YouTube
            containerClassName="yt-container"
            videoId={assetKey}
            opts={{ width: "100%", height: "100%", playVars: { autoplay: 1 } }}
          />
        </YouTubeWrap>
      ) : assetType == "vimeo" ? (
        "VIMEO MEDIA"
      ) : (
        ""
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #111;
`;

const Close = styled.a`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  padding: 0;
  width: 4rem;
  height: 4rem;
  background-color: #222;
  color: #eee;
  text-align: center;

  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: #eee;
    color: #222;
  }
  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 1px;
  }

  ${Icon} {
    display: inline-block;
    vertical-align: middle;
  }
`;

const ImageFallback = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${p => p.src});

  @supports (object-fit: contain) {
    background-image: none;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: contain;

  opacity: 0;

  @supports (object-fit: contain) {
    opacity: 1;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

const YouTubeWrap = styled.div`
  width: 100%;
  height: 100%;

  .yt-container {
    width: 100%;
    height: 100%;
  }
  iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
