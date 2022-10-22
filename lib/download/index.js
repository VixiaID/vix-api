const { Mediafire } = require('./mediafire');
const { Spotify } = require('./spotify');
const { YtToMp3, YtToMp4 } = require('./youtube');
const { Zippyshare } = require('./zippyshare');
const { isUrl } = require('./fuctions');

module.exports.mediafire = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`Url cannot be empety`))
    if (!isUrl(url)) return reject(new Error(`Only link`))
    MediaFire(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.spotify = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`Url cannot be empety`))
    if (!isUrl(url)) return reject(new Error(`Only link`))
    Spotify(url)
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
    if (!url) return reject(new Error(`Url cannot be empety`))
    if (!isUrl(url)) return reject(new Error(`Only link`))
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
    if (!url) return reject(new Error(`Url cannot be empety`))
    if (!isUrl(url)) return reject(new Error(`Only link`))
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
    if (!url) return reject(new Error(`Url cannot be empety`))
    if (!isUrl(url)) return reject(new Error(`Only link`))
    Zippyshare(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
