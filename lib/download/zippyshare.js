const axios = require('axios');
const cheerio = require('cheerio');
const _url = require('url');

function getFileUrl(html) {
  const re = new RegExp(`(?<=dlbutton)(.*)(?=;)`, 'gm');
  let result = html.data.match(re)[0].replace("').href = ", "");
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
      const res = await axios.get(url);
        if(res.data.includes('File does not exist on this server')) {
          return null;
        }
      const $ = cheerio.load(res.data);
      const splitUrl = url.split('/');
      const $lrbox = $('#lrbox > div.center');
      const name = $lrbox.find('div > font:nth-child(4)').text();
      const size = $lrbox.find('div > font:nth-child(7)').text();
      const uploaded = $lrbox.find('div > font:nth-child(10)').text();
      const fileUrl = getFileUrl(res);
      const finalURL = buildURL(splitUrl, fileUrl);

      const result = {
        name,
        size,
        uploaded,
        link: finalURL
      };
      resolve(result);
    }
    catch(error) {
      console.log(error);
    }
  });
}

module.exports.Zippyshare = Zippyshare;