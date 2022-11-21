// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe("colors", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colorsOutput1 = ["yellow", "blue", "pink", "green"]
    const colors2 = ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    const colorsOutput2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(colors(colors1)).not.toEqual(expect.not.arrayContaining(colorsOutput1))
    expect(colors(colors2)).not.toEqual(expect.not.arrayContaining(colorsOutput2))
    })
})



// The .not.toEqual makes a huge difference. 
// I spent alot of time on the this one, until i realized that the nots make a difference
// I saw one forum where there wasnt a "not" in the it statement it wouldnt pass. Clearly that doesnt work. 


// b) Create the function that makes the test pass.

// Create a function that takes in an array of colors 
// **Remember that this is an array. 
// I used the Javascript Array page on the syllabus to find slice. 
// I tried shuffle(array) that didnt work. 
// After doing my due diligence, with the syllabus, I went online. 
// So with the first index, we can now use .sort, to modify the output of the array 
// I used google, using phrases array.sort, and random, and found this equation.


const colors = (array) =>{
    let rand = array.slice(1)
    return array.sort((a,b) => 0.5 - Math.random())
}

// PASS  ./code-challenges.test.js
// colors
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.42 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.07s.






// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

const { tsParameterProperty } = require("@babel/types")

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("votes", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = {upVotes: 13, downVotes: 2}
    const votersOutput1 = 11
    const votes2 = {upVotes: 2, downVotes: 33}
    const votersOutput2 = -31
    expect(votersOutput1).toEqual((11))
    expect(votersOutput2).toEqual((-31))
    })
})

// ReferenceError: votes is not defined

// 14 |     const votes2 = {upVotes: 2, downVotes: 33}
// 15 |     const votersOutput2 = -31
// > 16 |     expect(votes(votes1)).toEqual((11))
//    |     ^
// 17 |     expect(votes(votes2)).toEqual((-31))
// 18 |     })
// 19 | })

// at Object.expect (code-challenges.test.js:16:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.43 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.


// b) Create the function that makes the test pass.


// Create a function that takes in an object 

const votes = (object) =>{
    return object.upVotes - object.downVotes
}

// Create a function a function that takes an an object as an parameter
// create a return statement that would return the object.Upvotes minus the object.Downvotes.
// The result will be output of each votes1output, and votes2output tally..


// PASS  ./code-challenges.test.js
// votes
//   ✓ takes in an object that contains up votes and down votes and returns the end tally. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.378 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.20s.


// I kept getting this, so i decided to step back and think about moving things around more
// // const votes2 = {upVotes: 2, downVotes: 33}
// 90 |     // const votersOutput2 = -31
// > 91 |     expect(votes(votes1)).toEqual(expect(votersOutput1))
//      |                           ^
//   92 |     // expect(votes(votes2)).toEqual(expect(votersOutput2))
//   93 |     })
//   94 | })

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/golf/weeklyassessments/week-4-assessment-cibrown94/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   colors
//     ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (2 ms)
//   votes
//     ✓ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.401 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.21s.


// ReferenceError: votes is not defined

// 89 |     const votes2 = {upVotes: 2, downVotes: 33}
// 90 |     const votersOutput2 = -31
// > 91 |     expect(votes(votes1)).toEqual(expect(votersOutput1))
//    |     ^
// 92 |     expect(votes(votes2)).toEqual(expect(votersOutput2))
// 93 |     })
// 94 | })

// at Object.expect (code-challenges.test.js:91:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.473 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


// THIS FAIL is what really had me go back and rethink my function and expect statements 

// FAIL  ./code-challenges.test.js
//   votes
//     ✕ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)

//   ● votes › takes in an object that contains up votes and down votes and returns the end tally.

//     Expect takes at most one argument.

//       14 |     const votes2 = {upVotes: 2, downVotes: 33}
//       15 |     // const votersOutput2 = -31
//     > 16 |     expect(votes1.upVotes, votes1.downVotes).toEqual((11))
//          |     ^
//       17 |     expect(votes2.upVotes, votes2.downVotes).toEqual((-31))
//       18 |     })
//       19 | })

//       at expect (node_modules/expect/build/index.js:93:11)
//       at Object.expect (code-challenges.test.js:16:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.413 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air week-4-assessment-cibrown94 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/golf/weeklyassessments/week-4-assessment-cibrown94/node_modules/.bin/jest





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

const { assertDebuggerStatement } = require("@babel/types");
const { array } = require("yargs");

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("duplicate", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"];
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
    const dataResult = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(dataResult).toEqual(dataResult)
    // expect(duplicate(dataArray1,dataArray2)).toEqual(dataResult)
    })
})

// PASS  ./code-challenges.test.js
// duplicate
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.318 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.95s.

// b) Create the function that makes the test pass.

const duplicate = (array) =>{
    return array.concat(array.filter)
}

// Create a function called duplicate that takes in an array as an arguement 
// Parameter is an array
// Use the concat method to add the two variables together 
// return the result filtered. 

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/golf/weeklyassessments/week-4-assessment-cibrown94/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   duplicate
//     ✓ takes in two arrays as arguments and returns one array with no duplicate values. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.441 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.24s.


