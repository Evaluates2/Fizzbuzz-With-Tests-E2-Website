
/**
 *  Takes a string and returns a “fizzbuzzified” version of the string where 
 *  every 3rd word is “fizz” and every 5th word is “buzz”, except every 15th 
 *  word is “fizzbuzz”. 
 *  @param {string} inputString 
 *  @returns {string} 
 */
const fizzbuzzify = inputString => {
  return inputString
    .split(" ")
    .filter(item => item !== "")
    .map((word, i) => {
      if ((i + 1) % 15 === 0) return "fizzbuzz";
      if ((i + 1) % 5 === 0) return "buzz";
      if ((i + 1) % 3 === 0) return "fizz";
      return word;
    })
    .join(" ");
};

module.exports = fizzbuzzify;