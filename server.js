import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import historyApiFallback from 'connect-history-api-fallback';
import config from './webpack.config.js';

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
