module.exports = {
  apps: [
    {
      name: "react-movie-gallery-csr",
      script: "scripts/start-csr.js",
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
