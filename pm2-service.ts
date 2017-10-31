const pm2 = require('pm2')
export interface pm2Obj {
  pid:  number,
  name: string,
  pm2_env: pm2EnvObj,
  pm_id: number,
  monit: pm2MonitObj,
}

export interface pm2EnvObj {
  status:             string, // 'online', ....
  exec_mode:          string, // 'cluster_mode', ...
  instances:          number,
  max_memory_restart: number,
  name:               string,
  pm_id:              number,
  restart_time:       number,
}

export interface pm2MonitObj {
  memory: number,
  cpu:    number
}

export async function pm2List(): Promise <pm2Obj[]> {
  return new Promise<pm2Obj[]>((resolve, reject) => {
    pm2.list((err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
