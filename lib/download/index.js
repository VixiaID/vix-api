const { mfdl } = require('../../lib/download/mediafire')
const { zippy } = require('../../lib/download/mediafire')
const { YtToMp3, YtToMp4 } = require('../../lib/dwnload')
const isUrl = require('../../lib/functions')

module.exports.mediafire = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`params "url" cannot be empty!`));
    if (!isUrl(url)) return reject(new Error(`this params only link!`));
    mfdl(url)
    .then(data => {
      if (data.result === undefined) {
        resolve({
          result: `result not found!`
        });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.zippyshare = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`params "url" cannot be empty!`));
    if (!isUrl(url)) return reject(new Error(`this params only link!`));
    zippy(url)
    .then(data => {
      if (data.result === undefined) {
        resolve({
          result: `result not found!`
        });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.yttomp3 = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`params "url" cannot be empty!`));
    if (!isUrl(url)) return reject(new Error(`this params only link!`));
    YtToMp3(url)
    .then(data => {
      if (data.result === undefined) {
        resolve({
          result: `result not found!`
        });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.yttomp4 = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`params "url" cannot be empty!`));
    if (!isUrl(url)) return reject(new Error(`this params only link!`));
    YtToMp4(url)
    .then(data => {
      if (data.result === undefined) {
        resolve({
          result: `result not found!`
        });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};