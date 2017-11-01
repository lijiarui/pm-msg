# pm-msg  
Programatic PM2 process.     
Start, delete, sendMsg by pm2 api using typescript.   
When start a pm2 process by name, will check if the name exist, if exist, will delete it then start.      
When kill a pm2 process by name, will check if it exsit, also will check if it is killed successfully.   

## INSTALL
```
npm install --save pm-msg
```

## USAGE
### start a pm2
```ts
import { pmMsg } from 'pm-msg'

pmMsg.start({
  script:             './example/script.ts',    
  instances:          2,    
  name:               'script',       
  max_memory_restart: '100M'          
})
```

### kill a pm2
```ts
import { pmMsg } from 'pm-msg'
pmMsg.kill('script')
```

### send message to a pm2 process by pm2 name
```ts
import { pmMsg } from 'pm-msg'
pmMsg.send('script', {
  data: { msg: 'send message: Hi, what is your name?' },
  topic: 'login'
})
```

## DOC
see [auto-generate doc](https://github.com/lijiarui/pm-msg/tree/master/docs/index.md)

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
