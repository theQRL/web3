# web3-zond-providers-ws


This is a websocket provider sub-package for zond-web3.js.  


## Installation

### Node.js

```bash
npm install web3-zond-providers-ws
```

## Usage

```js
const Web3WsProvider = require('web3-zond-providers-ws');

const options = {
    timeout: 30000, // ms

    // Useful for credentialed urls, e.g: ws://username:password@localhost:8546
    headers: {
      authorization: 'Basic username:password'
    },

    clientConfig: {
      // Useful if requests are large
      maxReceivedFrameSize: 100000000,   // bytes - default: 1MiB
      maxReceivedMessageSize: 100000000, // bytes - default: 8MiB

      // Useful to keep a connection alive
      keepalive: true,
      keepaliveInterval: 60000 // ms
    },

    // Enable auto reconnection
    reconnect: {
        auto: true,
        delay: 5000, // ms
        maxAttempts: 5,
        onTimeout: false
    }
};

const ws = new Web3WsProvider('ws://localhost:8546', options);
```

Additional client config options can be found [here](https://github.com/theturtle32/WebSocket-Node/blob/v1.0.31/docs/WebSocketClient.md#client-config-options).

## Types

All the TypeScript typings are placed in the `types` folder.

