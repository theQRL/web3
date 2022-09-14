# @theqrl/web3-providers-ipc


This is an IPC provider sub-package for @theqrl/web3.js.


## Installation

### Node.js

```bash
npm install @theqrl/web3-providers-ipc
```

## Usage

```js
const Web3IpcProvider = require('@theqrl/web3-providers-ipc');
const net = require(net);

const ipc = new Web3IpcProvider('/Users/me/Library/Zond/geth.ipc', net);
```

## Types

All the TypeScript typings are placed in the `types` folder.
