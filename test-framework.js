// function assertEqualsFunc() { }

// const assertEqualsV1 = (actual, expected) => {
//     const result = actual === expected;
//     return result;  // should be boolean 
// };

// const assertEqualsV2 = (actual, expected) => {
//     return actual === expected; // should be boolean 
// };

const assertEquals = (actual, expected) => actual === expected; // boolean 

module.exports = { assertEquals };

// Arrow Functions
// const arrowFunctionWithNoArgumentsAndBlockOfCode = () => { };
// const arrowFunctionWith1ArgAndCodeBlock = arg1 => { };
// const arrowFunctionWith2PlusArgsAndCB = (arg1, arg2) => { };

// // Implicit Returns
// const arrowFunctionWithNoArgumentsAndSingleStatement = () => console.log(`Hello World`);
// const arrFuncWithNoArgsAndImplicitReturn = () => (2 === "2");

// // Explicit Returns
// const arrFuncWithNoArgsAndExplicitReturn = () => {
//     const result = 2 === "2";
//     // return result;
// };

// const result = arrFuncWithNoArgsAndImplicitReturn();
// console.log(result);