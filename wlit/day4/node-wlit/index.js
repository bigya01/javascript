// const {sum,mul} =require("./common-module")
// console.log(sum(2,3))
// console.log(mul(2,3))

import {sum,mul} from './es-module.js'
console.log(sum(2,3))
console.log(mul(2,3))

import converter from './currency-converter.js'
console.log(converter(2))