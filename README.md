# pm-msg
send message to PM2 process, start, delete, sendMsg

## INSTALL
```
npm install --save pm-msg
```

## USAGE
### start a pm2
```ts
import { pmMsg } from 'pm-msg'

const option = {
  script:             './example/script.ts',    
  instances:          2,    
  name:               'script',       
  max_memory_restart: '100M'          
}

pmMsg.start(option)
```

### kill a pm2
```ts
import { pmMsg } from 'pm-msg'
pmMsg.kill('script')
```

### send message to a pm2 process by pm2 name
```ts
import { pmMsg } from 'pm-msg'
let option = {
  data: {
    msg: 'send message: Hi, what is your name?',
  },
  topic: 'login'
}
pmMsg.send('script', option)
```

## TIPS
### disconnect
The following function will disconnect automatically after done
* start
* send
* kill

### connect
The following function should call `pmMsg.disconnect()` at the end
* pmList
* pmNameExsit
* getProcess
* receive
