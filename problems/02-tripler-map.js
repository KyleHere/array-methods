/*
Write a function `tripler(nums)` that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.

Solve this using Array's `map()` method.

Examples:

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
*/

function tripler(nums){
  let final = [];
  nums.map(function(ele){
    let newNum = ele * 3;
    final.push(newNum);
  });
  return final;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = tripler;
} catch (e) {
  module.exports = null;
}
