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
    if (!url) {
      return resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
    } else if ((await anonUrl(url)).direct === true) {
      return resolve({
        status: true,
        type: 'direct',
        result: {
          message: 'Cannot get name and anyone because url is direct link',
          link: url
        }
      })
    } else if ((await anonUrl(url)).status === false) {
      return resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a anonfiles valid link',
        }
      })
    }
    Anonfiles(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
  });
}

async function bayfiles(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
      return
    } else if ((await bayUrl(url)).direct === true) {
      resolve({
        status: true,
        type: 'direct',
        result: {
          message: 'Cannot get name and anyone because url is direct link',
          link: url
        }
      })
      return
    } else if ((await bayUrl(url)).status === false) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a bayfiles valid link',
        }
      })
      return
    }
    Bayfiles(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
  });
}

async function hxfile(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
      return
    } else if ((await hxUrl(url)).direct === true) {
      resolve({
        status: true,
        type: 'direct',
        result: {
          message: 'Cannot get name and anyone because url is direct link',
          link: url
        }
      })
      return
    } else if ((await hxUrl(url)).status === false) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a hxfile valid link',
        }
      })
      return
    }
    Hxfile(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
  });
}

async function mediafire(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
      return
    } else if ((await mfUrl(url)).direct === true) {
      resolve({
        status: true,
        type: 'direct',
        result: {
          message: 'Cannot get name and anyone because url is direct link',
          link: url
        }
      })
      return
    } else if ((await mfUrl(url)).status === false) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a mediafire valid link',
        }
      })
      return
    }
    Mediafire(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
  });
}

async function racaty(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
      return
    } else if ((await racatyUrl(url)).direct === true) {
      resolve({
        status: true,
        type: 'direct',
        result: {
          message: 'Cannot get name and anyone because url is direct link',
          link: url
        }
      })
      return
    } else if ((await racatyUrl(url)).status === false) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a racaty valid link',
        }
      })
      return
    }
    Racaty(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
  });
}

async function solidfiles(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
      return
    } else if ((await solidUrl(url)).direct === true) {
      resolve({
        status: true,
        type: 'direct',
        result: {
          message: 'Cannot get name and anyone because url is direct link',
          link: url
        }
      })
      return
    } else if ((await solidUrl(url)).status === false) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a solidfiles valid link',
        }
      })
      return
    }
    Solidfiles(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
  });
}

async function ytmp3(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
      return
    } else if ((await ytUrl(url)).status === false) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a youtube valid link',
        }
      })
      return
    }
    YtToMp3(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
  });
}

async function ytmp4(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
      return
    } else if ((await ytUrl(url)).status === false) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a youtube valid link',
        }
      })
      return
    }
    YtToMp4(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
  });
}

async function zippyshare(url) {
  return new Promise(async(resolve, reject) => {
    if (!url) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'No link'
        }
      })
      return
    } else if ((await zippyUrl(url)).direct === true) {
      resolve({
        status: true,
        type: 'direct',
        result: {
          message: 'Cannot get name and anyone because url is direct link',
          link: url
        }
      })
      return
    } else if ((await zippyUrl(url)).status === false) {
      resolve({
        status: false,
        type: 'error',
        result: {
          message: 'Not a anonfiles valid link',
        }
      })
      return
    }
    Zippyshare(url)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      resolve(error);
    })
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
