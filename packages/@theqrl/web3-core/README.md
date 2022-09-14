# @theqrl/web3-core


This is a sub-package of @theqrl/web3.js.

The core package contains core functions for @theqrl/web3.js packages.


## Installation

### Node.js

```bash
npm install @theqrl/web3-core
```

## Usage

```js
const core = require('@theqrl/web3-core');

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

