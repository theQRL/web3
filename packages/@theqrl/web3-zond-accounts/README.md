# @theqrl/web3-zond-accounts


This is a sub-package of @theqrl/web3.js.

This is the accounts package used in the `@theqrl/web3-zond` package.


## Installation

### Node.js

```bash
npm install @theqrl/web3-zond-accounts
```

## Usage

```js
const Web3ZondAccounts = require('@theqrl/web3-zond-accounts');

const account = new Web3ZondAccounts('ws://localhost:8546');
account.create();
> {
  address: '0x2c7536E3605D9C16a7a3D7b1898e529396a65c23',
  privateKey: '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318',
  signTransaction: function(tx){...},
  sign: function(data){...},
  encrypt: function(password){...}
}
```

## Types

All the TypeScript typings are placed in the `types` folder.

