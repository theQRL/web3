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

import {JsonRpcPayload} from '@theqrl/web3-core-helpers';

export interface Method {
    name: string;
    call: string;
    params?: number;
    inputFormatter?: Array<(() => void) | null>;
    outputFormatter?: () => void;
    transformPayload?: () => void;
    extraFormatters?: any;
    defaultBlock?: string;
    defaultAccount?: string | null;
    abiCoder?: any;
    handleRevert?: boolean;
}
