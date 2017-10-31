/**
 * kill the pm2 process named with `script`
 */

var pm2 = require('pm2')
pm2.connect(function () {
  pm2.list(function(err, data) {
    if (err) throw err
    data.forEach(pm2Process => {
      if (pm2Process['name'] === 'script') {
        console.log(`kill pid ${pm2Process['pid']}`)
        process.kill(pm2Process['pid'], 'SIGTERM')
      }
    })
  })
})


