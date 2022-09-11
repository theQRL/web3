# web3-zond-abi


This is a sub-package of zond-web3.js.

This is the abi package used in the `web3-zond` package.


## Installation

### Node.js

```bash
npm install web3-zond-abi
```

## Usage

```js
const Web3ZondAbi = require('web3-zond-abi');

Web3ZondAbi.encodeFunctionSignature('myMethod(uint256,string)');
> '0x24ee0097'
```

## Types

All the TypeScript typings are placed in the `types` folder.

