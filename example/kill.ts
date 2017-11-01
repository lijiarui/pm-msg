/**
 * Kill the all pm2 process named with `script`
 */

import { pmMsg } from '../src/pm-msg'
pmMsg.kill('script')