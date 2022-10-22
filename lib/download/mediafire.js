const axios = require('axios');
const cheerio = require('cheerio');

async function Mediafire(url) {
  return new Promise(async(resolve, reject) => {
    try {
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