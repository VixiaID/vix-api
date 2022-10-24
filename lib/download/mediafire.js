const axios = require('axios');
const cheerio = require('cheerio');

const validMediafireIdentifierDL = /^[a-zA-Z0-9]+$/m;
const validMediafireShortDL = /^(https?:\/\/)?(www\.)?mediafire\.com\/\?[a-zA-Z0-9]+$/m;
const validMediafireLongDL = /^(https?:\/\/)?(www\.)?mediafire\.com\/(file|view|download)\/[a-zA-Z0-9]+(\/[a-zA-Z0-9_\-\.~%]+)?(\/file)?$/m;

async function Mediafire(url) {
  return new Promise(async(resolve, reject) => {
    try {
      const isMediafireUrl = (validMediafireIdentifierDL.test(url) || validMediafireShortDL.test(url) || validMediafireLongDL.test(url));
    if (!isMediafireUrl) reject(new Error('Not a mediafire file url'));
    if (validMediafireIdentifierDL.test(url)) url = 'https://mediafire.com/?' + url;
      axios.get(url).then(res => {
        const result = []
        const creator = 'OTSEE'
        const $ = cheerio.load(res.data)
        const link = $('a#downloadButton').attr('href')
        const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                 ', '').replace('        ', '')
        const splits = link.split('/')
        const name = splits[5]
        mime = name.split('.')
        mime = mime[1]
        result.push({
          creator,
          result: {
            name,
            mime,
            size,
            link
          }
        })
        resolve(result)
      })
    } catch(e){
       console.log(e)
    }
  })
}

module.exports.Mediafire = Mediafire