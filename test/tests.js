// IMPORT MODULES under test here:
//import { add } from '../calculator.js';

import { add, subtract, multiply, divide } from '../calculations.js';
const test = QUnit.test;

//ADDITION TEST
// name your test by what it is testing
test('adds two numbers 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    //const expected = 8;
    const expected = 9;

    //Act 
    // Call the function you're testing and set the result to a const
    // use your function here
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
console.log(add(3, 10));

//SUBTRACTION TEST
test('subtracts two numbers 5 and 3', (expect) => {
    const x = 5;
    const y = 3;
    //const expected = 2;
    const expected = 33;

    const actual = subtract(x, y);
    expect.equal(actual, expected);
});

console.log(subtract(10, 6));


//MULTIPLY TEST
test('multiply two numbers 5 and 3', (expect) => {
    const x = 5;
    const y = 3;
    //const expected = 15;
    const expected = 11;

    const actual = multiply(x, y);
    expect.equal(actual, expected);
});
console.log(multiply(5, 10));


//DIVIDE TEST
test('divide two numbers 6 and 3', (expect) => {
    const x = 6;
    const y = 3;
    //const expected = 2;
    const expected = 22;

    const actual = divide(x, y);
    expect.equal(actual, expected);
});

console.log(divide(10, 2));