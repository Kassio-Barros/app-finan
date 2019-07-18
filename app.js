const express = require('express');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);

module.exports = app;
