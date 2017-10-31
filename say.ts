import { pm2List } from './pm2-service'
const pm2Name = 'script'
const ONLINE = 'online'
var pm2 = require('pm2')

let option = {
  type: 'bot:msg',
  data: {
    msg: 'send message: Hi, what is your name?',
  },
  topic: 'login'
}

// send message by pm2 name
pm2.connect(async function () {
  const list = await pm2List()
  // only send message once to cluster
  for (let i in list) {
    let pm2Process = list[i]
    if (pm2Process.name === pm2Name && pm2Process.pm2_env.status === ONLINE) {
      option['id'] = pm2Process.pm_id
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
