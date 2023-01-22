# Vix Api

Unofficial Api

# Installation

With npm:
```shell
npm install vix-api
```
With yarn:
```shell
yarn add vix-api
```
Unstable version:
```shell
yarn add github:vix-api
```

# Usage
```shell
const vix = require('vix-api');
```

### Downloader

<details><summary><b>Anonfiles</b></summary><br>
#### Input
```js
vix.anonfiles('https://anonfiles.com/oaY3mbTdy8/test_txt')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    name: 'test.txt',
    type: 'txt',
    size: '26 B',
    link: 'https://cdn-147.anonfiles.com/oaY3mbTdy8/7fa706c7-1674366248/test.txt'
  }
}
```
</details>
<details><summary><b>Bayfiles</b></summary><br>
#### Input
```js
vix.bayfiles('https://bayfiles.com/NbDdOaI6y3/BAGAS31_-_Adobe_Photoshop_2023_v24.0.1.112_Full_Version_rar')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    name: 'BAGAS31 - Adobe Photoshop 2023 v24.0.1.112 Full Version.rar',
    type: 'rar',
    size: '4.33 GB',
    link: 'https://cdn-141.bayfiles.com/NbDdOaI6y3/7f1fb962-1674368914/BAGAS31%20-%20Adobe%20Photoshop%202023%20v24.0.1.112%20Full%20Version.rar'
  }
}
```
</details>
<details><summary><b>Hxfile</b></summary><br>
#### Input
```js
vix.hxfile('https://hxfile.co/nyoo294su9r2')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    name: 'Otakudesu.video_TsKD--01_720p Pre.mp4',
    type: 'mp4',
    size: '117.3 MB',
    downloaded: '128 times',
    link: 'https://4iekydqupiqr8zsbnuup4.ctmp.space/files/1/mra0jaw3hhmrjg/Otakudesu.video_TsKD--01_720p%20Pre.mp4'
  }
}
```
</details>
<details><summary><b>Mediafire</b></summary><br>
#### Input
```js
vix.mediafire('https://www.mediafire.com/file/5h71b545s6dfiv2')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    name: 'Nd_For_Spd_-_Most_Waed_5-1-0_McDevilStar.rar',
    type: 'rar',
    size: '140.72MB',
    uploaded: '2020-03-16 02:33:26',
    link: 'https://download2389.mediafire.com/i81ciw7p95fg/5h71b545s6dfiv2/Nd_For_Spd_-_Most_Waed_5-1-0_McDevilStar.rar'
  }
}
```
</details>
<details><summary><b>Racaty</b></summary><br>
#### Input
```js
vix.racaty('https://racaty.io/izj0fopl0ih8')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    name: 'Transformers.Revenge.of.the.Fallen.2009.IMAX.1080p.BluRay.x264.DD5.1-Pahe.in.mkv',
    type: 'mkv',
    size: '4.7 GB',
    uploaded: '2022-03-06',
    link: 'https://srv8.racaty.io:183/d/rufnwisu6xjz7x5ic6lzx52rroubsi5tdafakluexpprxssu7goa4oz2vhl4ralezwjxm4hg/Transformers.Revenge.of.the.Fallen.2009.IMAX.1080p.BluRay.x264.DD5.1-Pahe.in.mkv'
  }
}
```
</details>
<details><summary><b>Solidfiles</b></summary><br>
#### Input
```js
vix.solidfiles('http://solidfiles.com/v/YqgMXLRZ357k3')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    name: '[Anichin-Kazefuri][MCB][Part_II][EP_09][1080p_].mkv',
    type: 'video',
    size: '455.9 MB ',
    uploaded: '2 years, 3 months ago',
    link: 'http://s02.solidfilesusercontent.com/Y2M0ZTA0OWQ1MDgzNDBlMjUwMzg4OTg4M2QxOWEyNGEwOTk4YTI0YjoxcEpWM0E6TmpZRUFFa0NyOHlpQ0piS3hIaklhZHE1SXdB/YqgMXLRZ357k3/%5BAnichin-Kazefuri%5D%5BMCB%5D%5BPart_II%5D%5BEP_09%5D%5B1080p_%5D.mkv'
  }
}
```
</details>
<details><summary><b>Youtube Mp3</b></summary><br>
#### Input
```js
vix.ytmp3('https://youtu.be/BXct4eEqbEg')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    title: 'JEDUG JEDUG !!! Rawi Beat - I Dont Wanna Know - Remix ( Funky Night )',
    description: "Original Musik : GOLDHOUSE & Mokita - I don't wanna know \n" +
      'Bootleg : Rawi Beat\n' +
      '----------------------------\n' +
      'Follow Instagram :\n' +
      '------------------------------------------------------------------\n' +
      'https://www.instagram.com/rawi_beat/\n' +
      '-------------------------------------------------------------\n' +
      '\n' +
      '\n' +
      '#GOLDHOUSE #Mokita #idontwannaknow #RawiBeat',
    length_econds: '276',
    owner_rofile_url: 'http://www.youtube.com/channel/UCHCbyuBYAvOc61MldewYaOg',
    external_channel_id: 'UCHCbyuBYAvOc61MldewYaOg',
    thumb: 'https://i.ytimg.com/vi/BXct4eEqbEg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWihNMA8=&rs=AOn4CLAyvVY0RpCk-cp9evHWgEEDWpWF8w',
    channel: 'RAWI BEAT',
    published: '2022-01-25',
    views: '399668',
    category: 'Music',
    url: 'https://rr1---sn-un57sne7.googlevideo.com/videoplayback?expire=1674395993&ei=-ezMY-3FKsyeg8UPgIml8Ac&ip=178.128.212.61&id=o-AMtw8HE_aZc7VpWhdTN_b8F5br3umSNFtRpoLT5zidkB&itag=250&source=youtube&requiressl=yes&mh=M_&mm=31%2C29&mn=sn-un57sne7%2Csn-npoe7nds&ms=au%2Crdu&mv=m&mvi=1&pl=20&initcwndbps=137500&vprv=1&mime=audio%2Fwebm&ns=Q4itEXt-2_MLOQq8wAYTz0YK&gir=yes&clen=2405585&dur=275.641&lmt=1643123450954519&mt=1674374001&fvip=1&keepalive=yes&fexp=24007246&c=WEB&txp=5432434&n=renQFNXRbpwIPA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgNHZbr0gjEcq83SpGt2KxC_r71MrF7_Fv0E4XhIL2ugcCICq8v4z88zxyArA0OcIPPuVw4p70X_JfYmo769bLC1t2&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAIs26c4pfved3RnZKKEUk00s4WdL4mwk4D1cAK82JyfNAiBSjiqEqJg1oJNjoksSxt7V3s6G33olZxnjgmx5bCNumg%3D%3D'
  }
}
```
</details>
<details><summary><b>Youtube Mp4</b></summary><br>
#### Input
```js
vix.ytmp4('https://youtu.be/BXct4eEqbEg')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    title: 'JEDUG JEDUG !!! Rawi Beat - I Dont Wanna Know - Remix ( Funky Night )',
    description: "Original Musik : GOLDHOUSE & Mokita - I don't wanna know \n" +
      'Bootleg : Rawi Beat\n' +
      '----------------------------\n' +
      'Follow Instagram :\n' +
      '------------------------------------------------------------------\n' +
      'https://www.instagram.com/rawi_beat/\n' +
      '-------------------------------------------------------------\n' +
      '\n' +
      '\n' +
      '#GOLDHOUSE #Mokita #idontwannaknow #RawiBeat',
    length_seconds: '276',
    owner_rofile_url: 'http://www.youtube.com/channel/UCHCbyuBYAvOc61MldewYaOg',
    external_channel_id: 'UCHCbyuBYAvOc61MldewYaOg',
    thumb: 'https://i.ytimg.com/vi/BXct4eEqbEg/maxresdefault.jpg',
    channel: 'RAWI BEAT',
    published: '2022-01-25',
    views: '399671',
    category: 'Music',
    url: 'https://rr5---sn-un57enez.googlevideo.com/videoplayback?expire=1674396097&ei=Ye3MY6SeAcqbg8UPt_6g-Ac&ip=178.128.212.61&id=o-AFMmNqJ_elixMVRJ1GumT0DhD9JlwYs6rWWkKOTqWKzO&itag=18&source=youtube&requiressl=yes&mh=M_&mm=31%2C29&mn=sn-un57enez%2Csn-npoeenll&ms=au%2Crdu&mv=m&mvi=5&pl=20&initcwndbps=137500&vprv=1&mime=video%2Fmp4&ns=afraRA10TejvhywEo5JvR0UK&cnr=14&ratebypass=yes&dur=275.667&lmt=1665283002827513&mt=1674374001&fvip=4&fexp=24007246&c=WEB&txp=5438434&n=jcogjBpnB43Kqw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgPbyTgr8_IjBwxoAt1Dn6gPItfd2gDyKYoXbuWIcsXqgCIQDbWKcZFHP2Ai4Zl7p1s-SjF95Yeq_HRbjUL4vwM7Vb5Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgVKxvMOx6MLajGvqiq2at8i3wvl50SU45dQR9Hixaw6wCIQDOvNbusFwKGuFXKxfc9BfTEhzKArykx9I5C9W3_oly8A%3D%3D'
  }
}
```
</details>
<details><summary><b>Zippyshare</b></summary><br>
#### Input
```js
vix.zippyshare('https://www94.zippyshare.com/v/PhnBX3dJ/file.html')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
#### Output
```json
{
  status: true,
  type: 'scrape',
  result: {
    name: 'Gotoubun no Hanayome Movie.720.mp4',
    size: '410.6 MB',
    uploaded: '27-10-2022 14:34',
    link: 'https://www94.zippyshare.com/d/PhnBX3dJ/29127/Gotoubun%20no%20Hanayome%20Movie.720.mp4'
  }
}
```

# Isues
if you get an error or bug you can create an issues or if you want to fix it you can pull requests