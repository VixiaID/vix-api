const cheerio = require('cheerio');
const axios = require('axios');

const validZippyshareUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
;

function getFileName(html) {
  const $ = cheerio.load(html.data)
  const fileName = $('title').text().replace('Zippyshare.com - ', '')
  return fileName
}

function getFileUrl(html) {
  const re = new RegExp(`(?<=dlbutton)(.*)(?=;)`, 'gm')
	let result = html.data.match(re)[0].replace("').href = ", "")
	result = eval(result)
  return result
}

function getSize(html) {
  const $ = cheerio.load(html.data)
  let text = $('#lrbox').find('div.center > div:nth-child(1)').text().split('\n')
  const size = ((text[4] || '').replace('Size:', '' || '').trim())
  return size
}

function buildUrl(splitUrl, fileUrl) {
  const finalURL = `${splitUrl[0]}//${splitUrl[2]}${fileUrl}`
  return finalURL
}

async function Zippyshare(url) {
  return new Promise(async(resolve, reject) => {
    try {
      const isZippyshareUrl = (validZippyshareUrl.test)
      if (!isZippyshareUrl) return reject(new Error(`Not a valid zippyshare url`));
      const html = await axios.get(url)
	    if(html.data.includes('File does not exist on this server')) {
	    	return null
    	}
      const splitUrl = url.split('/')
      const fileName = getFileName(html)
      const fileUrl = getFileUrl(html)
      const size = getSize(html)
      const finalURL = buildUrl(splitUrl, fileUrl)
      const result = {
        creator: 'OTSEE',
        result: {
          name: fileName,
          size: size,
          link: finalURL
        }
      }
      resolve(result)
    } catch(e) {
      console.log(e)
    }
  })
}

module.exports.Zippyshare = Zippyshare