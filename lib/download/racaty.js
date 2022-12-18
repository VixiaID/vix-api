const agent = require('superagent');
const cheerio = require('cheerio');

async function Racaty(url) {
  return new Promise(async(resolve, reject) => {
    try {
      const unxId = url.split('io/')[1];
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
      const name = $('p.text-monospace:nth-child(2)').text();
      const size = $('p.text-monospace:nth-child(4)').text();
      const span = $('span').text().trim();
      const span2 = span.split('Uploaded:')[1];
      const uploaded = span2.split('Join:')[0].trim();
      const link = $('#uniqueExpiryLink').attr('href').replace(/ /g, '%20');
      const result = {
        name,
        size,
        uploaded,
        link
      };
      resolve(result);
    } catch(error) {
      reject(error);
      console.log;
    }
  });
}

module.exports = { Racaty };