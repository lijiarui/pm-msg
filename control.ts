
var pm2 = require('pm2')

pm2.connect(function (err) {
  if (err) {
    console.error(err)
    process.exit(2)
  }

  pm2.start({
    script:             'script.ts',    
    exec_mode:          'cluster',  
    instances:          2,    
    name:               'script',       
    max_memory_restart: '100M'          
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

