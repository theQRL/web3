const crypto = require("crypto");
var utils = require('@theqrl/web3-utils');
var Buffer = require('buffer/').Buffer 

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function wrtBigUInt64BE (buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7)
  
    let lo = Number(value & BigInt(0xffffffff))
    buf[offset + 7] = lo
    lo = lo >> 8
    buf[offset + 6] = lo
    lo = lo >> 8
    buf[offset + 5] = lo
    lo = lo >> 8
    buf[offset + 4] = lo
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
    buf[offset + 3] = hi
    hi = hi >> 8
    buf[offset + 2] = hi
    hi = hi >> 8
    buf[offset + 1] = hi
    hi = hi >> 8
    buf[offset] = hi
    return offset + 8
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
      const n = typeof min === 'bigint' ? 'n' : ''
      let range
      if (byteLength > 3) {
        if (min === 0 || min === BigInt(0)) {
          range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
        } else {
          range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                  `${(byteLength + 1) * 8 - 1}${n}`
        }
      } else {
        range = `>= ${min}${n} and <= ${max}${n}`
      }
      throw new errors.ERR_OUT_OF_RANGE('value', range, value)
    }
    checkBounds(buf, offset, byteLength)
}

function boundsError (value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type)
      throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
    }
  
    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
    }
  
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                      `>= ${type ? 1 : 0} and <= ${length}`,
                                      value)
}

function checkBounds (buf, offset, byteLength) {
    validateNumber(offset, 'offset')
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
      boundsError(offset, buf.length - (byteLength + 1))
    }
}

function validateNumber (value, name) {
    if (typeof value !== 'number') {
      throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
    }
}
  
  

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
    throw new Error('BigInt not supported')
}

let NumToHex = function(n) {
    return '0x' + Number(n).toString(16)
}

let HexToBigInt = function(hexN) {
    return BigInt(parseInt(hexN.slice(2), 16))
}

let CreateTx = function(nonce, gas, gasPrice, to, value, input) {
    return {
        "type": NumToHex(2),
        "chainId": NumToHex(1),
        "nonce": NumToHex(nonce),
        "gas": NumToHex(gas),
        "gasPrice": NumToHex(gasPrice),
        "to": to,
        "value": NumToHex(value),
        "data": input,
    }
}

let CreateCall = function(nonce, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, from, to, value, input) {
    return {
        "from": from,
        "chainId": NumToHex(1),
        "nonce": NumToHex(nonce),
        "gas": NumToHex(gas),
        "gasPrice": NumToHex(gasPrice),
        // "maxFeePerGas": NumToHex(maxFeePerGas),
        // "maxPriorityFeePerGas": NumToHex(maxPriorityFeePerGas),
        "to": to,
        "value": NumToHex(value),
        "data": input,
    }
}

let GenerateTxSigningHash = function(tx) {

    let chainId = HexToBigInt(tx.chainId)
    let nonce = HexToBigInt(tx.nonce)
    let gas = HexToBigInt(tx.gas)
    let gasPrice = HexToBigInt(tx.gasPrice)
    let to = tx.to
    let value = HexToBigInt(tx.value)
    let data = tx.data
    let bytesTo = String(to).slice(2);
    let bytesInput = String(data).slice(2);
    let expectedBufferSize = 8 * 5;
    if (to !== '') {
        expectedBufferSize += 20
    }
    if (data !== '') {
        expectedBufferSize += String(data).slice(2).length / 2
    }

    let buf = Buffer.alloc(expectedBufferSize)
    let offset = 0
    buf.writeBigInt64BE(chainId, offset)
    offset += 8
    buf.writeBigInt64BE(nonce, offset)
    offset += 8
    buf.writeBigInt64BE(gas, offset)
    offset += 8
    buf.writeBigInt64BE(gasPrice, offset)
    offset += 8
    buf.write(String(to).slice(2), offset, 'hex')
    offset += bytesTo.length / 2
    buf.writeBigInt64BE(value, offset)
    offset += 8
    buf.write(bytesInput, offset, 'hex')

    return "0x"+crypto.createHash('sha256').update(buf).digest('hex')
} 

let SignTx = async function(tx, signer) {
    let signingHash = GenerateTxSigningHash(tx).slice(2)
    let signature = await signer.sign(Buffer.from(signingHash, 'hex'))
    tx.signature = '0x' + Buffer.from(signature, 'binary').toString('hex')
    tx.pk = '0x' + Buffer.from(signer.pk, 'hex').toString('hex')
}

module.exports = {
    NumToHex,
    HexToBigInt,
    CreateTx,
    CreateCall,
    GenerateTxSigningHash,
    SignTx,
}