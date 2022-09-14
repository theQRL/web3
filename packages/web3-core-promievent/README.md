# @theqrl/web3-core-promievent


This is a sub-package of @theqrl/web3.js.

This is the PromiEvent package used to return a EventEmitter mixed with a Promise to allow multiple final states as well as chaining.


## Installation

### Node.js

```bash
npm install @theqrl/web3-core-promievent
```

## Usage

```js
const Web3PromiEvent = require('@theqrl/web3-core-promievent');

const myFunc = function(){
    const promiEvent = Web3PromiEvent();
    
    setTimeout(function() {
        promiEvent.eventEmitter.emit('done', 'Hello!');
        promiEvent.resolve('Hello!');
    }, 10);
    
    return promiEvent.eventEmitter;
};

// and run it
myFunc()
.on('done', console.log)
.then(console.log);
```

