const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const requireDir = require('require-dir');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

requireDir('./models');
mongoose.connect(config.connectionstring, { useNewUrlParser: true });

app.use('/book', require('./routes/book-route'));

module.exports = app;