function anonUrl(url) {
  const res = url.match(/((http|https):\/\/)(www.)?anonfiles\.com\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/);
  return (res !== null);
}

function bayUrl(url) {
  const res = url.match(/((http|https):\/\/)(www.)?bayfiles\.com\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/);
  return (res !== null);
}

function hxUrl(url) {
  const res = url.match(/^(https?:\/\/)?hxfile\.co\/\b([a-zA-Z0-9])/);
  return (res !== null);
}

function mfUrl(url) {
  const res1 = url.match(/^(https?:\/\/)?(www\.)?mediafire\.com\/\?[a-zA-Z0-9]+$/m);
  const res2 = url.match(/^(https?:\/\/)?(www\.)?mediafire\.com\/(file|view|download)\/[a-zA-Z0-9]+(\/[a-zA-Z0-9_\-\.~%]+)?(\/file)?$/m);
  return (res1 !== null || res2 !== null);
}

function racatyUrl(url) {
  const res = url.match(/^(https?:\/\/)?racaty\.io\/\b([a-zA-Z0-9])/);
  return (res !== null);
}

function solidUrl(url) {
  const res = url.match(/^((http|https):\/\/)(www.)?solidfiles\.com\/v\/\b([-a-zA-Z0-9])/);
  return (res !== null);
}

function ytUrl(url) {
  const res = url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/);
  return (res !== null);
}

function zippyUrl(url) {
  const res = url.match(/(https?:\/\/(.+?\.)?zippyshare\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/gm);
  return (res !== null);
}

module.exports = {
  anonUrl,
  bayUrl,
  hxUrl,
  mfUrl,
  solidUrl,
  ytUrl,
  zippyUrl
};