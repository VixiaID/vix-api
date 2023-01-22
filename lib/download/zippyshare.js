const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function getFileUrl(data) {
  const re = new RegExp(`(?<=dlbutton)(.*)(?=;)`, 'gm');
  let result = data.match(re)[0].replace("').href = ", "");
  result = eval(result)
  return result;
}

function buildURL(splitUrl, fileUrl) {
  const finalURL = `${splitUrl[0]}//${splitUrl[2]}${fileUrl}`;
  return finalURL;
}

async function Zippyshare(url) {
  return new Promise(async(resolve, reject) => {
    try {
      const res = await fetch(url);
      const data = await res.text();
      if (data.includes('File does not exist on this server')) {
        return ({
          status: false,
          type: 'error',
          result: {
            message: 'File not exist'
          }
        });
      }
      const $ = cheerio.load(data);
      const splitUrl = url.split('/');
      const name = $('meta[property="og:title"]').attr('content').trim();
      const size = $('font[style]:nth-child(7)').text();
      const uploaded = $('font[style]:nth-child(10)').text();
      const fileUrl = await getFileUrl(data);
      const link = await buildURL(splitUrl, fileUrl);
      const result = {
        status: true,
        type: 'scrape',
        result: {
          name,
          size,
          uploaded,
          link
        }
      };
      resolve(result);
    }
    catch(error) {
      console.log(error);
      return resolve({
        status: false,
        type: 'error',
        result: {
          message: 'error'
        }
      });
    }
  });
}

module.exports.Zippyshare = Zippyshare;