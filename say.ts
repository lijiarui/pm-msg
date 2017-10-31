var pm2 = require('pm2')

let option = {
  type: 'bot:msg',
  data: {
    msg: 'send message: Hi, what is your name?',
  },
  topic: 'login'
}

// send message by pm2 name
// only send message once to cluster
pm2.connect(function () {
  pm2.list(function(err, data) {
    if (err) throw err
    for (let i in data) {
      let pm2Process = data[i]
      if (pm2Process['name'] === 'script' && pm2Process['pm2_env']['status'] === 'online') {
        option['id'] = pm2Process['pm_id']
        pm2.sendDataToProcessId(option['id'], option, function (err, res) {
          if (err) throw err
          console.log(option)
          console.log('send the following message successfully!')
        })
        return
      }
    }
  })
  
  pm2.launchBus(function (err, pm2_bus) {
    pm2_bus.on('bot:msg', function (packet) {
      console.log('get response:')
      console.log(packet)
      pm2.disconnect()
    })
  })
})
