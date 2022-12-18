const cheerio = require('cheerio');
const fetch = require('node-fetch');

async function Bayfiles(url) {
  return new Promise(async(resolve, reject) => {
    try {
      const res = await fetch(url);
      const body = await res.text();
      const $ = cheerio.load(body);
      const name = $('div.row.top-wrapper > div:nth-child(2) > h1').text();
      const type = name.split('.')[1];
      const size = $('div#download-wrapper > div.col-xs-12 > a#download-url').text();
      const size2 = size.replace('Download', '').replace('(', '').replace(')', '').trim();
      const link = $('div#download-wrapper > div.col-xs-12 > a#download-url').attr('href').replace(/ /g, '%20');
      
      const result = {
          name,
          type,
          size: size2,
          link
      };
      resolve(result);
    }
    catch(error) {
      console.log(error);
    }
  });
}

module.exports = { Bayfiles };