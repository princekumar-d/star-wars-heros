const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const historyApiFallback = require('connect-history-api-fallback');
const config = require('./webpack.config.js');
const router = express.Router();

const PORT = process.env.PORT || 3001;

const app = express();

const compiler = webpack(config);

app.use(historyApiFallback());

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
  })
);

app.use('/', express.static('dist'));

app.listen(PORT, function () {
  console.log(`Star Wars characters app listening on port ${PORT}!\n`);
});
