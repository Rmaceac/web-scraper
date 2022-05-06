const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const PORT = 3000;
const dest = 'https://www.usedvictoria.com/all?q=dumbbell&r=greatervictoria';

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

axios(dest)
  .then(res => {
    const html = res.data;
    console.log(html);
    const $ = cheerio.load(html);
    const articles = [];

    $('.title', html).each(function() {
      const title = $(this).text()
      const url = $(this).find('a').attr('href')
      articles.push({
        title,
        url
      });
    });
    console.log(articles);
  })
  .catch(e => {
    console.log("Error:", e);
  });