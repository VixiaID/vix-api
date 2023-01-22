async function anonUrl(url) {
  const res = /((http|https):\/\/)(www.)?anonfiles\.com\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/;
  const res2 = /^https:\/\/cdn-[0-9]{3}.anonfiles\.com\/[^"]+/;
  return ({
    status: (res.test(url)),
    direct: (res2.test(url))
  });
}

async function bayUrl(url) {
  const res = /((http|https):\/\/)(www.)?bayfiles\.com\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/
  const res2 = /^https:\/\/cdn-[0-9]{3}.bayfiles\.com\/[aA-zZ0-9]+\/[aA-zZ0-9]+-[aA-zZ0-9]+\/[^"]+/
  return ({
    status: (res.test(url)),
    direct: (res2.test(url))
  });
}

async function hxUrl(url) {
  const res = /^(https?:\/\/)?hxfile\.co\/\b([a-zA-Z0-9])/;
  const res2 = /^https:\/\/.*ctmp\.space\/files\/[0-9]\/[^"]+/;
  return ({
    status: (res.test(url) || res2.test(url)),
    direct: (res2.test(url))
  });
}

async function mfUrl(url) {
  const res1 = /^(https?:\/\/)?(www\.)?mediafire\.com\/\?[a-zA-Z0-9]+$/m;
  const res2 = /^(https?:\/\/)?(www\.)?mediafire\.com\/(file|view|download)\/[a-zA-Z0-9]+(\/[a-zA-Z0-9_\-\.~%]+)?(\/file)?$/m;
  const res3 = /^(https?:\/\/)?(download)[0-9]+(\.mediafire)\.com\/[a-z0-9]+(\/.*)/;
  return ({
  status: (res1.test(url) || res2.test(url) || res3.test(url)),
  direct: res3.test(url)
  })
}

async function racatyUrl(url) {
  const res = /^(https?:\/\/)?racaty\.io\/\b([a-zA-Z0-9])/;
  const res2 = /^https:\/\/.*racaty\.io\:183\/[^"]+/;
  return ({
    status: (res.test(url) || res2.test(url)),
    direct: (res2.test(url))
  });
}

async function solidUrl(url) {
  const res = /^((http|https):\/\/)(www.)?solidfiles\.com\/v\/\b([-a-zA-Z0-9])/;
  const res2 = /^http:\/\/s[0-9]{2}.solidfilesusercontent\.com\/[^"]+/;
  return ({
    status: (res.test(url)),
    direct: (res2.test(url))
  });
}

async function ytUrl(url) {
  const res = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/;
  return ({
    status: (res.test(url))
  });
}

async function zippyUrl(url) {
  const res = /(https?:\/\/(.+?\.)?zippyshare\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/gm;
  const res2 = /^https:\/\/www[0-9]{2}.zippyshare\.com\/d\/[a-zA-Z0-9]{8}\/[0-9]{5}\/[^"]+/;
  return ({
    status: (res.test(url) || res2.test(url)),
    direct: (res2.test(url))
  });
}
module.exports = {
  anonUrl,
  bayUrl,
  hxUrl,
  mfUrl,
  racatyUrl,
  solidUrl,
  ytUrl,
  zippyUrl
};