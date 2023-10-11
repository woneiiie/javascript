// 1. string concatenation
console.log ('my'+ 'cat');
console.log ('1'+ 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

//2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation


console. log(10 < 6); // less than 
console. log (10 <= 6); // less than or equal
console. log(10 > 6); // greater than
console. log(10 >= 6); // greater than or equal


const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first trutht value
console.log ('or: ${value1 || value2 || check()}');

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableobject && nullableobject.something

function check() {
    for(let i = 0; i , 10; i++){
        //wasting time
        console.log('');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// === strict equality, no type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcone, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}




