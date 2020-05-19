import "./polyfill.js";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { ResourcesProvider } from "@/lib/resources";

import { TmdbResourceFactory } from "@/app/lib/tmdb";
import { TranslationResourceFactory, getBestLocale } from "@/app/lib/i18n";
import App from "../app";

async function main() {
  const bestLocale = getBestLocale(
    window.navigator.languages ||
      window.navigator.language ||
      window.navigator.userLanguage ||
      window.navigator.systemLanguage
  );

  const root = ReactDOM.unstable_createRoot(document.getElementById("root"));
  let initialResources = {};

  const resources = {
    tmdb: TmdbResourceFactory(initialResources.tmdb),
    translation: TranslationResourceFactory(initialResources.translation)
  };

  root.render(
    <ResourcesProvider resources={resources}>
      <HashRouter>
        <App bestLocale={bestLocale} />
      </HashRouter>
    </ResourcesProvider>
  );
}
main();
