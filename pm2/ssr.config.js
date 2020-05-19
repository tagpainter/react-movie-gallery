module.exports = {
  apps: [
    {
      name: "react-movie-gallery-ssr",
      script: "scripts/start-ssr.js",
      node_args: "-r dotenv-flow/config",
      env_development: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
