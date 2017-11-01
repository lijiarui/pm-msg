# pm-msg v1.0.1 Documentation

<a name="pmMsg"></a>

## pmMsg
**Kind**: global class  

* [pmMsg](#pmMsg)
    * [new pmMsg()](#new_pmMsg_new)
    * [.connect()](#pmMsg.connect) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.disconnect()](#pmMsg.disconnect)
    * [.pmList()](#pmMsg.pmList) ⇒ <code>Promise</code>
    * [.pmNameExsit(name)](#pmMsg.pmNameExsit) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.start(opt)](#pmMsg.start)
    * [.send(name, content)](#pmMsg.send) ⇒ <code>Promise.&lt;(processResObj\|undefined)&gt;</code>
    * [.getProcess(name)](#pmMsg.getProcess) ⇒ <code>Promise.&lt;(pmObj\|null)&gt;</code>
    * [.kill(name)](#pmMsg.kill) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="new_pmMsg_new"></a>

### new pmMsg()
main

<a name="pmMsg.connect"></a>

### pmMsg.connect() ⇒ <code>Promise.&lt;void&gt;</code>
Same with `pm2.connect()`

**Kind**: static method of [<code>pmMsg</code>](#pmMsg)  
**Returns**: <code>Promise.&lt;void&gt;</code> - none  
**Example**  
```js
await pmMsg.connect()
```
<a name="pmMsg.disconnect"></a>

### pmMsg.disconnect()
Same with `pm2.disconnect()`

**Kind**: static method of [<code>pmMsg</code>](#pmMsg)  
**Example**  
```js
pmMsg.disconnect()
```
<a name="pmMsg.pmList"></a>

### pmMsg.pmList() ⇒ <code>Promise</code>
Same with `pm2.list` Gets the list of running processes being managed by pm2.

**Kind**: static method of [<code>pmMsg</code>](#pmMsg)  
**Returns**: <code>Promise</code> - return object array pmObj[]  
**Example**  
```js
await pmMsg.pmList()
```
<a name="pmMsg.pmNameExsit"></a>

### pmMsg.pmNameExsit(name) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if exist the named process.

**Kind**: static method of [<code>pmMsg</code>](#pmMsg)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - true for exsit, false for no name exsit in pm2 list.  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

**Example**  
```js
await pmMsg.pmNameExsit('script') // check if has a process named with script
```
<a name="pmMsg.start"></a>

### pmMsg.start(opt)
Starts a script that will be managed by pm2.
Only support `cluster` mode
Will check if the script name exist, if exist, will delete first, then start the process

**Kind**: static method of [<code>pmMsg</code>](#pmMsg)  

| Param | Type |
| --- | --- |
| opt | <code>processObj</code> | 

**Example**  
```js
const option = {
  script:             './example/script.ts',
  instances:          2,
  name:               'script',
  max_memory_restart: '100M'
}
pmMsg.start(option)
```
<a name="pmMsg.send"></a>

### pmMsg.send(name, content) ⇒ <code>Promise.&lt;(processResObj\|undefined)&gt;</code>
Send message to process managed by pm2.
Just send to one process instead of send message to all process named with `name`.
Will auto disconnect when send over.
Return undefined if cannot get the result

**Kind**: static method of [<code>pmMsg</code>](#pmMsg)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| content | <code>sendObj</code> | 

**Example**  
```js
pmMsg.send('script', {
  data: { msg: 'send message: Hi, what is your name?' },
  topic: 'login'
})
```
<a name="pmMsg.getProcess"></a>

### pmMsg.getProcess(name) ⇒ <code>Promise.&lt;(pmObj\|null)&gt;</code>
Find one process by name, if many, return the first one.
Should disconnect when done.

**Kind**: static method of [<code>pmMsg</code>](#pmMsg)  

| Param | Type |
| --- | --- |
| name | <code>any</code> | 

<a name="pmMsg.kill"></a>

### pmMsg.kill(name) ⇒ <code>Promise.&lt;boolean&gt;</code>
Stops the process and removes it from pm2’s list.
Same with `pm2.delete()`
Will check whethe delete the process successfully. If delete successfully, return true, else, return false.

**Kind**: static method of [<code>pmMsg</code>](#pmMsg)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

