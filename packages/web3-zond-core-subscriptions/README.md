# web3-zond-core-subscriptions


This is a sub-package of zond-web3.js

This subscriptions package is used within some zond-web3.js packages.


## Installation

### Node.js

```bash
npm install web3-zond-core-subscriptions
```

## Usage

```js
const Web3Subscriptions = require('web3-zond-core-subscriptions');

const sub = new Web3Subscriptions({
    name: 'subscribe',
    type: 'zond',
    subscriptions: {
        'newBlockHeaders': {
            subscriptionName: 'newHeads',
            params: 0,
            outputFormatter: formatters.outputBlockFormatter
        },
        'pendingTransactions': {
            params: 0,
            outputFormatter: formatters.outputTransactionFormatter
        }
    }
});
sub.attachToObject(myCoolLib);

myCoolLib.subscribe('newBlockHeaders', function(){ ... });
```


