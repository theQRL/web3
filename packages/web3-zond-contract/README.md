# web3-zond-contract


This is a sub-package of zond-web3.js.

This is the contract package used in the `web3-zond` package.


## Installation

### Node.js

```bash
npm install web3-zond-contract
```

## Usage

```js
const Web3ZondContract = require('web3-zond-contract');

// Set provider for all later instances to use
Web3ZondContract.setProvider('ws://localhost:8546');

const contract = new Web3ZondContract(jsonInterface, address);
contract.methods.somFunc().send({from: ....})
.on('receipt', function(){
    ...
});
```


## Types

All the TypeScript typings are placed in the `types` folder.

