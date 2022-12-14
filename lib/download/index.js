const { Anonfiles } = require('./anonfiles');
const { Mediafire } = require('./mediafire');
const { YtToMp3, YtToMp4 } = require('./youtube');
const { Zippyshare } = require('./zippyshare');
const { isUrl } = require('../functions');

module.exports.anonfiles = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`Url cannot be empty`));
    if (!isUrl(url)) return reject(new Error(`Only link`));
    Anonfiles(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.mediafire = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`Url cannot be empty`));
    if (!isUrl(url)) return reject(new Error(`Only link`));
    Mediafire(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.ytdlmp3 = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`Url cannot be empty`));
    if (!isUrl(url)) return reject(new Error(`Only link`));
    YtToMp3(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.ytdlmp4 = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`Url cannot be empty`));
    if (!isUrl(url)) return reject(new Error(`Only link`));
    YtToMp4(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.zippyshare = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`Url cannot be empty`));
    if (!isUrl(url)) return reject(new Error(`Only link`));
    Zippyshare(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
