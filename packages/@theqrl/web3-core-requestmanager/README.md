# @theqrl/web3-core-requestmanager


This is a sub-package of @theqrl/web3.js.

This requestmanager package is used by most @theqrl/web3.js packages.

## Installation

### Node.js

```bash
npm install @theqrl/web3-core-requestmanager
```

## Usage

```js
const Web3WsProvider = require('@theqrl/web3-providers-ws');
const Web3RequestManager = require('@theqrl/web3-core-requestmanager');

const requestManager = new Web3RequestManager(new Web3WsProvider('ws://localhost:8546'));
```

