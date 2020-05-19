import loadable from "@loadable/component";

export const DefaultLayout = loadable(() => import("./Default"));
DefaultLayout.displayName = "DefaultLayout";

export const ViewLayout = loadable(() => import("./View"));
ViewLayout.displayName = "ViewLayout";

export const FullScreenLayout = loadable(() => import("./FullScreen"));
FullScreenLayout.displayName = "FullScreenLayout";
