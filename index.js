// index.js

/**
 * Splits an array into chunks of the specified size.
 *
 * @param {Array} array - The array to split into chunks.
 * @param {number} size - The size of each chunk.
 * @returns {Array[]} - An array containing the chunks.
 */
function chunkArray(array, size) {
    if (!Array.isArray(array)) {
      throw new TypeError('Input should be an array');
    }
    if (typeof size !== 'number' || size <= 0) {
      throw new TypeError('Size should be a positive number');
    }
  
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  
  module.exports = chunkArray;
  