// var multiply = function (a, b) {
//     var total = 0;
//     for (var i = 0; i < b; i++) {
//         total = sum(a, total);
//     }
//     return total;
// };


// var sum = require('./sum');
// var multiply = function (a, b) {
//     var total = 0;
//     for (var i = 0; i < b; i++) {
//         total = sum(a, total);
//     }
//     return total;
// };
// module.exports = multiply;


// ESM
import {sum} from './sum.js';
var multiply = function (a, b) {
    var total = 0;
    for (var i = 0; i < b; i++) {
        total = sum(a, total);
    }
    return total;
};
export {multiply};