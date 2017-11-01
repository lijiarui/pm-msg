import { pmMsg } from '../src/pm-msg'
let option = {
  data: {
    msg: 'send message: Hi, what is your name?',
  },
  topic: 'login'
}
pmMsg.send('script', option)