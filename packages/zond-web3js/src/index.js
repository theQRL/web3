/*
    This file is part of zond-web3.js.

    zond-web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    zond-web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with zond-web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/

"use strict";


var version = require('../package.json').version;
var core = require('web3-zond-core');
var Zond = require('web3-zond');
var Net = require('web3-zond-net');
var Personal = require('web3-zond-personal');
var Shh = require('web3-zond-shh');
var Bzz = require('web3-zond-bzz');
var utils = require('web3-zond-utils');

var ZondWeb3 = function ZondWeb3() {
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

ZondWeb3.version = version;
ZondWeb3.utils = utils;
ZondWeb3.modules = {
    Zond: Zond,
    Net: Net,
    Personal: Personal,
    Shh: Shh,
    Bzz: Bzz
};

core.addProviders(ZondWeb3);

module.exports = ZondWeb3;

