# Vix Api

Unofficial Api

# Install

```shell
npm install vix-api
```
# List

```shell
YtMp3 = ytdlmp3
YtMp4 = ytdlmp4
Anonfiles = anonfiles
Mediafire = mediafire
Zippyshare = zippyshare
```

# Example

```shell
const vix = require('vix-api');
url = 'your link'

vix.ytdlmp3(url)
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
