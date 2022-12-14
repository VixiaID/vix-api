const cheerio = require('cheerio');
const fetch = require('node-fetch');
const _url = require('url');
const isAnonUrl = /((http|https):\/\/)(www.)?anonfiles\.com\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/;

async function Anonfiles(url) {
  return new Promise(async(resolve, reject) => {
    try {
      if(!isAnonUrl) return reject(new Error(`That is not a anonfiles url!`));
      
      const res = await fetch(url);
      const body = await res.text();
      const $ = cheerio.load(body);
      const name = $('div.row.top-wrapper > div:nth-child(2) > h1').text();
      const type = name.split('.')[1];
      const size = $('div#download-wrapper > div.col-xs-12 > a#download-url').text();
      const size2 = size.replace('Download', '').replace('(', '').replace(')', '').trim();
      const link = $('div#download-wrapper > div.col-xs-12 > a#download-url').attr('href');
      
      const result = {
        creator: 'OTSEE',
        result: {
          name,
          type,
          size: size2,
          link
        }
      };
      resolve(result);
    }
    catch(error) {
      console.log(error);
    }
  });
}

module.exports = { Anonfiles };