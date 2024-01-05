// var totalMultiply = multiply(5, 3);
// var totalSum = sum(5, 3);
// console.log('Product of 5 and 3 = ' + totalMultiply);
// console.log('Sum of 5 and 3 = ' + totalSum);


// var multiply = require('./multiply');
// var sum = require('./sum');
// var totalMultiply = multiply(5, 3);
// var totalSum = sum(5, 3);
// console.log('Product of 5 and 3 = ' + totalMultiply);
// console.log('Sum of 5 and 3 = ' + totalSum);

// ESM
import {multiply} from './multiply.js';
import {sum} from './sum.js';

var totalMultiply = multiply(5, 3);
var totalSum = sum(5, 3);
console.log('Product of 5 and 3 = ' + totalMultiply);
console.log('Sum of 5 and 3 = ' + totalSum);