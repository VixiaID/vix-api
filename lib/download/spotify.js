const spotifydl = require('spotifydl-core').default
const fs = require('fs')

const Spotify = new spotifydl({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
})

module.exports.Spotify = Spotify