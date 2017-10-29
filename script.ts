const express = require('express')
const app = new express()

app.listen(3000, () => {
  console.log('express begin to listening')
})

const response = {
  type: 'bot:msg',
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
