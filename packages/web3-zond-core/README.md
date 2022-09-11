# web3-zond-core


This is a sub-package of zond-web3.js.

The core package contains core functions for zond-web3.js packages.


## Installation

### Node.js

```bash
npm install web3-zond-core
```

## Usage

```js
const core = require('web3-zond-core');

const CoolLib = function CoolLib() {
    // sets _requestmanager and adds basic functions
    core.packageInit(this, arguments);
};

CoolLib.providers;
CoolLib.givenProvider;
CoolLib.setProvider();
CoolLib.BatchRequest();
CoolLib.extend();
...
```

## Types

All the TypeScript typings are placed in the `types` folder.

