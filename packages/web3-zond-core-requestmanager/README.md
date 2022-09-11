# web3-zond-core-requestmanager


This is a sub-package of zond-web3.js.

This requestmanager package is used by most zond-web3.js packages.

## Installation

### Node.js

```bash
npm install web3-zond-core-requestmanager
```

## Usage

```js
const Web3WsProvider = require('web3-zond-providers-ws');
const Web3RequestManager = require('web3-zond-core-requestmanager');

const requestManager = new Web3RequestManager(new Web3WsProvider('ws://localhost:8546'));
```

