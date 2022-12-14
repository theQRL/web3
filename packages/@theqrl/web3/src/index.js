/*
    This file is part of @theqrl/web3.js.

    @theqrl/web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    @theqrl/web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with @theqrl/web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/

"use strict";


var version = require('../package.json').version;
var core = require('@theqrl/web3-core');
var Zond = require('@theqrl/web3-zond');
var Net = require('@theqrl/web3-net');
var Personal = require('@theqrl/web3-zond-personal');
var Shh = require('@theqrl/web3-shh');
var Bzz = require('@theqrl/web3-bzz');
var utils = require('@theqrl/web3-utils');

var Web3 = function Web3() {
    var _this = this;

    // sets _requestmanager etc
    core.packageInit(this, arguments);

    this.version = version;
    this.utils = utils;

    this.zond = new Zond(this);
    this.shh = new Shh(this);
    this.bzz = new Bzz(this);

    // overwrite package setProvider
    var setProvider = this.setProvider;
    this.setProvider = function (provider, net) {
        /*jshint unused: false */
        setProvider.apply(_this, arguments);

        _this.zond.setRequestManager(_this._requestManager);
        _this.shh.setRequestManager(_this._requestManager);
        _this.bzz.setProvider(provider);

        return true;
    };
};

Web3.version = version;
Web3.utils = utils;
Web3.modules = {
    Zond: Zond,
    Net: Net,
    Personal: Personal,
    Shh: Shh,
    Bzz: Bzz
};

core.addProviders(Web3);

module.exports = Web3;

