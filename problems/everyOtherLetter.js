/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} - 
 *
 * ex: everyOtherLetter("mississippi") //=> "msispi"
 *
 */

const everyOtherLetter = str => {
    let newStr = [];
    for (let i = 0; i < str.length; i+=2) {
        newStr.push(str[i]);
    }
    return newStr.join('');
}

module.exports = everyOtherLetter;
