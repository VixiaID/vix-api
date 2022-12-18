const axios = require('axios');
const cheerio = require('cheerio');

async function Solidfiles(url) {
  return new Promise(async(resolve, reject) => {
    try {
      const res = await axios.request({
        url,
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
		  	}
      });
      const $ = cheerio.load(res.data);
      const $$ = $('body > script:nth-child(15)');
      const data = JSON.parse($.html().replace("angular.module('sf.viewer').constant('viewerOptions', ","").replace(");",''));
      const name = data.nodeName;
      const type = name.split('.')[1];
      const section = $('#content > div > div.middle > div.right > article:nth-child(1) > section.box-content.meta > p').text().trim();
      const size = section.split('-')[0];
      const uploaded = section.split('-')[1];
      const link = data.downloadUrl;
      const result = {
        name,
        type,
        size,
        uploaded,
        link
      };
      resolve(result);
    } catch(error) {
      console.log(error);
    }
  });
}

module.exports = { Solidfiles };