var pm2 = require('pm2')

let option = {
  id:   0,
  type: 'bot:msg',
  data: {
    msg: 'send message: Hi, what is your name?',
  },
  topic: 'login'
}

pm2.connect(function () {
  pm2.sendDataToProcessId(option['id'], option, function (err, res) {
    if (err) throw err
    console.log(option)
    console.log('send the following message successfully!')
  })
})


pm2.launchBus(function (err, pm2_bus) {
  pm2_bus.on('bot:msg', function (packet) {
    console.log('get response:')
    console.log(packet)
  })
})