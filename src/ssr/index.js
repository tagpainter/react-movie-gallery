import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import ssrPrepass from "react-ssr-prepass";
import { Helmet } from "react-helmet";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { ResourcesProvider, serializeResources } from "@/lib/resources";
import { TmdbResourceFactory } from "@/app/lib/tmdb";
import { TranslationResourceFactory, getBestLocale } from "@/app/lib/i18n";
import template from "./template";
import App from "../app";

export default ({ statsFile }) => async (req, res, next) => {
  const bestLocale = getBestLocale(req.headers["accept-language"]);

  const routerContext = {};
  const resources = {
    tmdb: TmdbResourceFactory(),
    translation: TranslationResourceFactory()
  };

  const chunkExtractor = new ChunkExtractor({
    statsFile
  });
  const sheet = new ServerStyleSheet();

  try {
    // Create element
    const element = (
      <StyleSheetManager sheet={sheet.instance}>
        <ChunkExtractorManager extractor={chunkExtractor}>
          <ResourcesProvider resources={resources}>
            <StaticRouter
              basename={process.env.BASENAME}
              location={req.url}
              context={routerContext}
            >
              <App bestLocale={bestLocale} />
            </StaticRouter>
          </ResourcesProvider>
        </ChunkExtractorManager>
      </StyleSheetManager>
    );

    // Await for all promises thrown inside
    await ssrPrepass(element);

    // Render to string
    const html = ReactDOMServer.renderToString(element);

    // React-helmet
    const helmet = Helmet.renderStatic();

    // Redirect or status codes
    if (routerContext.status) res.status(routerContext.status);
    if (routerContext.url) return res.redirect(301, routerContext.url);

    const initialResources = serializeResources(resources);

    return res.send(
      template({
        children: html,
        chunkExtractor: chunkExtractor,
        sheet: sheet,
        initialResources,
        helmet
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).end();
  } finally {
    sheet.seal();
  }
};
