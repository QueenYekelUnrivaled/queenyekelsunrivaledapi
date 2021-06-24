const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(
    bodyParser.json({
        limit: '30mb',
        extended: true,
    })
);

app.use(
    bodyParser.urlencoded({
        limit: '30mb',
        extended: true,
    })
);

app.use(cors());

app.use(morgan('combined'));

// routes
const router = require('./routes');
app.use('/', router);

module.exports = app;
