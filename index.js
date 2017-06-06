const port = process.env.PORT || 5432;
const express = require('express');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cacheControl = require('express-cache-controller');

const svg = require('./lib/svg');
const initar = require('./lib/initar');

const app = express();

app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(favicon('./favicon.ico'));
app.use(cacheControl({
  maxAge: 60 * 60 * 24 * 30,
}));
app.use(svg());

app.all('/:initials', (req, res) => {
  const params = Object.assign({}, req.query, req.body, req.params);
  res.svg(initar(params));
});

app.listen(port, e => {
  console.log(`listening on http://localhost:${port}`);
});
