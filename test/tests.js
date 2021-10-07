// IMPORT MODULES under test here:
//import { add } from '../calculator.js';

import { add } from '../calculations.js';

const test = QUnit.test;


// name your test by what it is testing
test('adds two numbers 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
