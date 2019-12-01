const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images');
const webpack = require('webpack');

require('dotenv').config();

const nextConfig = {
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  }
};

module.exports = withPlugins([
  [withCSS, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    }
  }],
  withImages,
], nextConfig)