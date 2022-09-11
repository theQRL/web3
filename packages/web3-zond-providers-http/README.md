# web3-zond-providers-http


This is a HTTP provider sub-package for zond-web3.js.


## Installation

### Node.js

```bash
npm install web3-zond-providers-http
```

## Usage

```js
const http = require('http');
const Web3HttpProvider = require('web3-zond-providers-http');

const options = {
    keepAlive: true,
    timeout: 20000, // milliseconds,
    headers: [{name: 'Access-Control-Allow-Origin', value: '*'},{...}],
    withCredentials: false,
    agent: {http: http.Agent(...), baseUrl: ''}
};

const provider = new Web3HttpProvider('http://localhost:8545', options);
```

## Types

All the TypeScript typings are placed in the `types` folder.

