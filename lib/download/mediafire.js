const axios = require('axios');
const cheerio = require('cheerio');

async function Mediafire(url) {
  return new Promise(async(resolve, reject) => {
    try {
      var _a, _b;
      const res = await axios.get(url);
      const $ = cheerio.load(res.data);
      const $intro = $('div.dl-info > div.intro');
      const filename = $intro.find('div.filename').text();
      const filetype = ((_b = (_a = /\(\.(.*?)\)/.exec($intro.find('div.filetype > span').eq(1).text())) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.trim()) || 'bin';
      const $li = $('div.dl-info > ul.details > li');
      const size = $li.eq(0).find('span').text();
      const uploaded = $li.eq(1).find('span').text();
      const link = $('a#downloadButton').attr('href');

      const result = {
        name,
        type,
        size,
        uploaded,
        link
      };
      resolve(result);
    } catch(e) {
      console.log(e);
    }
  });
}

module.exports.Mediafire = Mediafire;