const axios = require('axios');
const cheerio = require('cheerio');
const url = require('url');

async function zippy(url) {
  return new Promise(async(resolve, reject) => {
    try {
      axios.get(url).then(res => {
        let result = []
        const creator = 'OTSEE'
        const $ = cheerio.load(res.data)
        let text = $('#lrbox').find('div.center > div:nth-child(1)').text().split('\n')
				const title = (text[3] ||'').trim()
				const size = ((text[4] || '').replace('Size:', '') || '').trim()
				const upload_date = ((text[5] || '').replace('Uploaded:', '') || '').trim()
				$('script').each((i, e) => {
				  let sc = $(e).html().search(/dlbutton/g)
					if (sc >= 0) {
						let divider = $(e).html().split(';')[0]
						let decrypt = divider.split("document.getElementById('dlbutton').href =")[1]
						console.log(decrypt)
						let _url
						if (decrypt) {
							_url = url.parse(Url).hostname + eval(decrypt)
							_url = _url.startsWith('http') ? _url : 'http://' + _url
							const zurl = _url
							result.push({
							  creator,
							  result: {
							    title,
							    size,
							    upload_date,
							    link
							  }
							})
						}
					}
				})
				resolve(result)
      })
    } catch(e) {
      console.log(e)
    }
  })
}

module.exports.zippy = zippy 