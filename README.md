# Vix Api

unofficial Api

# Install

```shell
npm install vix-api
```
# Example

```shell
const vix = require('vix-api');

vix.YtToMp3('https://youtu.be/lBpapBz32h0')
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
});
```
