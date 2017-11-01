# pm2-sendMsg
PM2 sendDataToProcessId

## RUN
* `npm run demo`  start the control, strat two pm2 named with `script`
* `npm run say`   send message pm2 named with `script`
* `npm run clean` delete all pm2 and clean log
* `npm run kill`  kill pm2 named with `script` process

## DOC
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
