import loadable from "@loadable/component";

export const HomePage = loadable(() => import("./Home"));

export const FavouritesPage = loadable(() => import("./Favourites"));

export const DetailPage = loadable(() => import("./Detail"));

export const AssetPage = loadable(() => import("./Asset"));

export const PersonPage = loadable(() => import("./Person"));

export const AboutPage = loadable(() => import("./About"));

export const PreparingPage = loadable(() => import("./Preparing"));

export const NotFoundPage = loadable(() => import("./NotFound"));
