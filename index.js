const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))