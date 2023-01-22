const ytc = require('ytdl-core');

async function YtToMp3(url) {
  return new Promise((resolve, reject) => {
    try {
      const _id = ytc.getVideoID(url);
      const _info = ytc.getInfo(`https://www.youtube.com/watch?v=${_id}`)
      .then((data) => {
        let _formats = data.formats;
        let _audio = [];
        for (let x = 0; x < _formats.length; x++) {
          if (_formats[x].mimeType == 'audio/webm; codecs=\"opus\"') {
            let _yt = _formats[x];
            _audio.push(_yt.url);
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText;
        const description = data.player_response.microformat.playerMicroformatRenderer.description.simpleText;
        const lengthSeconds = data.player_response.microformat.playerMicroformatRenderer.lengthSeconds;
        const ownerProfileUrl = data.player_response.microformat.playerMicroformatRenderer.ownerProfileUrl;
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
        const channel= data.player_response.microformat.playerMicroformatRenderer.ownerChannelName;
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount;
        const category = data.player_response.microformat.playerMicroformatRenderer.category;
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate;
        const externalChannelId = data.player_response.microformat.playerMicroformatRenderer.externalChannelId;
        const result = {
          status: true,
          type: 'scrape',
          result: {
            title: title,
            description: description,
            length_econds: lengthSeconds,
            owner_rofile_url: ownerProfileUrl,
            external_channel_id: externalChannelId,
            thumb: thumb,
            channel: channel,
            published: published,
            views: views,
            category: category,
            url: _audio[1]
          }
        };
        return(result);
      });
      resolve(_info);
    } catch (error) {
      return resolve({
        status: false,
        type: 'error',
        result: {
          message: 'An error occurred, make sure the parameters are correct and try again, if there is still an error, please contact the coder!'
        }
      });
    }
    console.log(error);
  });
}

async function YtToMp4(url) {
  return new Promise((resolve, reject) => {
    try {
      const _id = ytc.getVideoID(url);
      const _info = ytc.getInfo(`https://www.youtube.com/watch?v=${_id}`)
      .then((data) => {
        let _formats = data.formats;
        let _video = [];
        for (let x = 0; x < _formats.length; x++) {
          if (_formats[x].container == 'mp4' && _formats[x].hasVideo == true && _formats[x].hasAudio == true) {
            let _vid = _formats[x];
            _video.push(_vid.url);
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText;
        const description = data.player_response.microformat.playerMicroformatRenderer.description.simpleText;
        const lengthSeconds = data.player_response.microformat.playerMicroformatRenderer.lengthSeconds;
        const ownerProfileUrl = data.player_response.microformat.playerMicroformatRenderer.ownerProfileUrl;
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName;
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount;
        const category = data.player_response.microformat.playerMicroformatRenderer.category;
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate;
        const externalChannelId = data.player_response.microformat.playerMicroformatRenderer.externalChannelId;
        
        const result = {
          status: true,
          type: 'scrape',
          result: {
            title: title,
            description: description,
            length_seconds: lengthSeconds,
            owner_rofile_url: ownerProfileUrl,
            external_channel_id: externalChannelId,
            thumb: thumb,
            channel: channel,
            published: published,
            views: views,
            category: category,
            url: _video[0]
          }
        };
        return(result);
      });
      resolve(_info);
    } catch (error) {
      return resolve({
        status: false,
        type: 'error',
        result: {
          message: 'An error occurred, make sure the parameters are correct and try again, if there is still an error, please contact the creator!'
        }
      });
    }
    console.log(error);
  });
};

module.exports.YtToMp3 = YtToMp3;
module.exports.YtToMp4 = YtToMp4;
