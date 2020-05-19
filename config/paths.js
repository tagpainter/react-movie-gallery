const path = require("path");

exports.PROJECT_ROOT = path.resolve(__dirname, "..");
exports.SRC = path.resolve(__dirname, "../src");
exports.DIST = path.resolve(__dirname, "../dist");
exports.CSR_DIST = path.resolve(__dirname, "../dist/csr");
exports.CSR_SRC = path.resolve(__dirname, "../src/csr");
exports.SSR_DIST_REL = "dist/ssr";
exports.SSR_DIST = path.resolve(__dirname, "../dist/ssr");
exports.SSR_SRC = path.resolve(__dirname, "../src/ssr");
exports.PUBLIC_PATH = "/dist/";
exports.I18N_DIR = path.resolve(__dirname, "../i18n");
exports.DOCS = path.resolve(__dirname, "../docs");
