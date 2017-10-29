
var pm2 = require('pm2')

pm2.connect(function (err) {
  if (err) {
    console.error(err)
    process.exit(2)
  }

  pm2.start({
    script:             'script.ts',          // Script to be run
    exec_mode:          'cluster',         // Allows your app to be clustered
    instances:          1,                 // Optional: Scales your app by 1
    name:               'test1',                 // Optional: Pm2 name
    max_memory_restart: '100M'    // Optional: Restarts your app if it reaches 100M
  }, function (err, apps) {
    if (apps[0].pm2_env.pm_id !== undefined) {
      console.log(`start pm2 successfully! pm_id: ${apps[0].pm2_env.pm_id}`)
    } else {
      console.log(`falied to start pm2`)
    }
    pm2.disconnect()
    if (err) throw err
  })
})

