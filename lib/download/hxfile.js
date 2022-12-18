const agent = require('superagent');
const cheerio = require('cheerio');

async function Hxfile(url) {
  return new Promise(async(resolve, reject) => {
    try {
      const unxId = url.split('co/')[1];
      const data = {
        'op': 'download2',
        'id': unxId,
        'rand': '',
        'referer': '',
        'method_free': '',
        'method_premium': ''
      };
      const res = await agent.post(url).type('form').send(data);
      const $ = cheerio.load(res.text);
      const name = $('.dfilename').text();
      const size = $('.size > span:nth-child(2)').text();
      const downloaded = $('.downloads > span:nth-child(2)').text();
      const link = $('.btn.btn-dow').attr('href').replace(/ /g, '%20');
      const result = {
        name,
        size,
        downloaded,
        link
      };
      resolve(result);
    } catch(error) {
      reject(error);
      console.log;
    }
  });
}

module.exports = { Hxfile };