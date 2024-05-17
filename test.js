// test.js

const chunkArray = require('./index');

// Test cases
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(chunkArray(array, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(chunkArray(array, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
console.log(chunkArray(array, 4)); // [[1, 2, 3, 4], [5, 6, 7, 8], [9]]
