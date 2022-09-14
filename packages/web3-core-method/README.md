# @theqrl/web3-core-method


This is a sub-package of @theqrl/web3.js.

This method package is used within most @theqrl/web3.js packages.


## Installation

### Node.js

```bash
npm install @theqrl/web3-core-method
```

## Usage

```js
const Web3Method = require('@theqrl/web3-core-method');

const method = new Web3Method({
    name: 'sendTransaction',
    call: 'zond_sendTransaction',
    params: 1,
    inputFormatter: [inputTransactionFormatter]
});
method.attachToObject(myCoolLib);

myCoolLib.sendTransaction({...}, function(){ ... });
```

## Types

All the TypeScript typings are placed in the `types` folder.

