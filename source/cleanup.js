const del = require('del');
const copyfiles = require('copyfiles');

(async () => {
  await del(['../**', '!../source/**', '!../CNAME', '!../README.md'], { dot: false, force: true })
  copyfiles(['./public/**/*', '../'], { follow: true, up: 1 }, (err) => {
    if (err) console.error(err)
    else console.log('Build successfully!')
  })
})()
