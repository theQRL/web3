# @theqrl/web3-zond-iban


This is a sub package of @theqrl/web3.js

This is the IBAN package to be used in the `@theqrl/web3-zond` package.


## Installation

### Node.js

```bash
npm install @theqrl/web3-zond-iban
```

## Usage

```js
const Web3ZondIban = require('@theqrl/web3-zond-iban');

const iban = new Web3ZondIban('XE75JRZCTTLBSYEQBGAS7GID8DKR7QY0QA3');
iban.toAddress() > '0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B';
```


## Types

All the TypeScript typings are placed in the `types` folder.

