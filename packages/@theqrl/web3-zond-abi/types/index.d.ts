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

import { AbiInput, AbiItem } from '@theqrl/web3-utils';

export class AbiCoder {
    encodeFunctionSignature(functionName: string | AbiItem): string;

    encodeEventSignature(functionName: string | AbiItem): string;

    encodeParameter(type: any, parameter: any): string;

    encodeParameters(types: any[], paramaters: any[]): string;

    encodeFunctionCall(abiItem: AbiItem, params: string[]): string;

    decodeParameter(type: any, hex: string): { [key: string]: any };

    decodeParameters(types: any[], hex: string): { [key: string]: any };

    decodeLog(
        inputs: AbiInput[],
        hex: string,
        topics: string[]
    ): { [key: string]: string };
}

declare const coder: AbiCoder;
export default coder;
