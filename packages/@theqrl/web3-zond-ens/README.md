# @theqrl/web3-zond-ens


This is a sub-package of @theqrl/web3.js.

This is the contract package to be used in the `@theqrl/web3-zond` package.


## Installation

### Node.js

```bash
npm install @theqrl/web3-zond-ens
```

## Usage

```js
const zond = new Web3Zond(web3.currentProvider);
const ens = new ZondEns(zond);

ens.getAddress('ethereum.eth').then(function(result) {
    console.log(result);
});
```

## Types

All the TypeScript typings are placed in the `types` folder.
