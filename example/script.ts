const express = require('express')
const app = new express()
var pm2 = require('pm2')

app.listen(3100, () => {
  console.log('express begin to listening')
})

const response = {
  type: 'msg',
  data: {
    success: true,
    msg: 'response: My name is Alice'
  }
}

process.on('message', function (packet) {
  console.log('getMessage as follows')
  console.log(packet)
  console.log('begin to response the followng data')
  console.log(response)
  ; (process as any).send(response)
})