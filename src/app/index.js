import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { Page } from "./lib/router";
import { AppProvider } from "./lib/app";
import { localedTo, LocaleHelmet } from "./lib/i18n";

import GlobalStyle from "./components/GlobalStyle";
import LoadingScreen from "./components/LoadingScreen";

import { DefaultLayout, ViewLayout, FullScreenLayout } from "./layouts";
import {
  HomePage,
  DetailPage,
  AssetPage,
  PersonPage,
  FavouritesPage,
  AboutPage,
  PreparingPage,
  NotFoundPage
} from "./pages";

import "./index.scss";

export default ({ bestLocale }) => {
  return (
    <AppProvider>
      <LocaleHelmet
        titleTemplate="%s - Movie Gallery"
        defaultTitle="Movie Gallery"
      >
        <meta name="description" content="React movie gallery" />
      </LocaleHelmet>
      <GlobalStyle />
      <React.Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Page
            exact
            path={localedTo("/")}
            layout={DefaultLayout}
            component={HomePage}
          />
          <Page
            path={localedTo(
              "/:mediaType(movie|tv)/:id/:assetType(image|youtube|vimeo)/:assetKey"
            )}
            layout={FullScreenLayout}
            component={AssetPage}
          />
          <Page
            path={localedTo("/:mediaType(movie|tv)/:id")}
            layout={ViewLayout}
            component={DetailPage}
          />
          <Page
            path={localedTo("/person/:id")}
            layout={ViewLayout}
            component={PersonPage}
          />
          <Page
            path={localedTo("/favourites")}
            layout={DefaultLayout}
            component={FavouritesPage}
          />
          <Page
            path={localedTo("/about")}
            layout={DefaultLayout}
            component={AboutPage}
          />
          <Page
            path={localedTo("/discover")}
            layout={DefaultLayout}
            component={PreparingPage}
          />
          <Redirect exact from="/" to={`/${bestLocale.code.toLowerCase()}`} />
          <Page layout={DefaultLayout} component={NotFoundPage} />
        </Switch>
      </React.Suspense>
    </AppProvider>
  );
};
