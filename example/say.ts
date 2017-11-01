import { pmMsg } from '../src/pm-msg'
pmMsg.send('script', {
  data: { msg: 'send message: Hi, what is your name?' },
  topic: 'login'
})