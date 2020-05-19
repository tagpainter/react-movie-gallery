export default ({
  children,
  chunkExtractor,
  sheet,
  initialResources,
  helmet
}) => `
<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap"
      rel="stylesheet"
    />
    ${helmet.meta.toString()}
    ${helmet.title.toString()}
    ${helmet.link.toString()}
    ${chunkExtractor.getLinkTags()}
    ${chunkExtractor.getStyleTags()}
    ${sheet.getStyleTags()}
    <script id="__INITIAL_RESOURCES__" type="application/json">${initialResources}</script>
  </head>
  <body>
    <div id="root">${children}</div>
    ${chunkExtractor.getScriptTags()}
  </body>
</html>
`;
