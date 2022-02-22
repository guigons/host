module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    devtool: false,
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "home",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          remote: "remote@http://localhost:3001/remoteEntry.js",
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  }
}
