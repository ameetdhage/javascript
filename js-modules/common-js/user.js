const getName = () => {
    return 'Rohan';
};

const dateOfBirth = '12.01.1982';

console.log('🚀 ~ module:', module)

// #1
module.exports = {
    getName : getName,
    dob : dateOfBirth,
}

// // #2
// exports.getName = getName;
// exports.dob = dateOfBirth;

// #3
// exports.getName = () => {
//     return 'Rohan';
// };

// var dob = '12.01.1982';
// exports.dob = dob;

