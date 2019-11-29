import SourceMapSupport from 'source-map-support';
import '@babel/polyfill';

import express from 'express';
import bodyParser from 'body-parser';

SourceMapSupport.install();

const app = express();


app.use(bodyParser.json());
app.use(express.static('static'));

const feed = require('../static/dat/feed.json');

app.get('/api/feed', (req, res) => {
  res.json({ feed });
});

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.listen(8080, () => {
  console.log('App started on port 8000');
});
