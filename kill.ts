/**
 * Kill the pm2 process named with `script`
 */
import { pm2List } from './pm2-service'
var pm2 = require('pm2')
pm2.connect(async function () {
  const list = await pm2List()
  list.forEach(pm2Process => (pm2Process.name === 'script') && process.kill(pm2Process.pid, 'SIGTERM') )
  pm2.disconnect()
})

// Should add detect whether kill successfully function


