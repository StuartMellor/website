import SourceMapSupport from 'source-map-support';
import '@babel/polyfill';

import express from 'express';
import bodyParser from 'body-parser';

SourceMapSupport.install();

const app = express();


app.use(bodyParser.json());
app.use(express.static('static'));

const test = require('../static/dat/test.json');

app.get('/api/test', (req, res) => {
  res.json({ test });
});

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.listen(8080, () => {
  console.log('App started on port 8000');
});
