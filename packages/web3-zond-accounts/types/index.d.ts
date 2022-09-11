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

import { AccountsBase, SignedTransaction, WalletBase } from 'web3-zond-core';

export {SignedTransaction} from 'web3-zond-core';

export class Accounts extends AccountsBase {}

export class Wallet extends WalletBase {}

export interface Sign extends SignedTransaction {
    message: string;
    signature: string;
}

export interface SignatureObject {
    messageHash: string;
    r: string;
    s: string;
    v: string;
}
