const { Anonfiles } = require('./anonfiles');
const { Bayfiles } = require('./bayfiles');
const { Hxfile } = require('./hxfile');
const { Mediafire } = require('./mediafire');
const { Racaty } = require('./racaty');
const { Solidfiles } = require('./solidfiles');
const { YtToMp3, YtToMp4 } = require('./youtube');
const { Zippyshare } = require('./zippyshare');
const { anonUrl, bayUrl, hxUrl, mfUrl, racatyUrl, solidUrl, ytUrl, zippyUrl } = require('../util');

async function anonfiles(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!anonUrl(url)) return reject(new Error(`not valid a anonfiles url!`));
    Anonfiles(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

async function bayfiles(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!bayUrl(url)) return reject(new Error(`not valid a bayfiles url!`));
    Bayfiles(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

async function hxfile(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!hxUrl(url)) return reject(new Error(`not valid a hxfile url!`));
    Hxfile(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

async function mediafire(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!mfUrl(url)) return reject(new Error(`not valid a mediafire url!`));
    Mediafire(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

async function racaty(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!racatyUrl(url)) return reject(new Error(`not valid a racaty url!`));
    Racaty(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

async function solidfiles(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!solidUrl(url)) return reject(new Error(`not valid a solidfiles url!`));
    Solidfiles(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

async function ytmp3(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!ytUrl(url)) return reject(new Error(`not valid a youtube url!`));
    YtToMp3(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

async function ytmp4(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!ytUrl(url)) return reject(new Error(`not valid a youtube url!`));
    YtToMp4(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

async function zippyshare(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) return reject(new Error(`url can't be empty!`));
    if (!zippyUrl(url)) return reject(new Error(`not valid a zippyshare url!`));
    Zippyshare(url)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

module.exports = {
  anonfiles,
  bayfiles,
  hxfile,
  mediafire,
  racaty,
  solidfiles,
  ytmp3,
  ytmp4,
  zippyshare
};
