import { pmMsg } from '../src/pm-msg'

const option = {
  script:             './example/script.ts',    
  instances:          2,    
  name:               'script',       
  max_memory_restart: '100M'          
}

pmMsg.start(option)