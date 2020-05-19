require("../config/register");
const express = require("express");
const path = require("path");
const paths = require("../config/paths");

const app = express();

app.use(process.env.BASENAME, express.static(paths.GHPAGES_DIST));

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
