const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.PORT = process.env.PORT || 3120;
process.env.I18N_DIR = process.env.I18N_DIR
  ? path.resolve(__dirname, "..", process.env.I18N_DIR)
  : path.resolve(__dirname, "../i18n");
process.env.I18N_URL = process.env.I18N_URL || "/lang";
process.env.TMDB_APIKEY = process.env.TMDB_APIKEY || "";
process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || "/dist/";
process.env.BASENAME = process.env.BASENAME || "/";
