/*
    This file is part of @theqrl/web3.js.

    web3.js is free software: you can redistribute it and/or modify
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
import type { Agent as HTTPAgent } from 'http';
import type { Agent as HTTPSAgent } from 'https';

import { HttpProviderBase, JsonRpcResponse } from '@theqrl/web3-core-helpers';

export interface HttpHeader {
    name: string;
    value: string;
}

export interface HttpProviderAgent {
    http?: HTTPAgent;
    https?: HTTPSAgent;
}

export interface HttpProviderOptions {
    withCredentials?: boolean;
    timeout?: number;
    headers?: HttpHeader[];
    agent?: HttpProviderAgent;
    keepAlive?: boolean;
}

export class HttpProvider extends HttpProviderBase {
    host: string;

    withCredentials?: boolean;
    timeout: number;
    headers?: HttpHeader[];
    agent?: HttpProviderAgent;
    connected: boolean;

    constructor(host?: string, options?: HttpProviderOptions);

    send(
        payload: object,
        callback?: (
            error: Error | null,
            result: JsonRpcResponse | undefined
        ) => void
    ): void;
    disconnect(): boolean;
    supportsSubscriptions(): boolean;
}
