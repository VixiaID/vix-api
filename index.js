const { mediafire } = require('./lib/download/mediafire')
const { spotify } = requiere('spotify')
const { YtToMp3, YtToMp4 } = require('./lib/download/youtube')
const { zippy } = require('./lib/download/zippyshare')

module.exports.mediafire = mediafire
module.exports.spotify = spotify
module.exports.YtToMp3 = YtToMp3
module.exports.YtToMp4 = YtToMp4
module.exports.zippy = zippy