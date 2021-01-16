/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

const letterCount = str => {
    newArr = str.split(' ');
    newStr = newArr.join('');

    let count = {};
    for (let i = 0; i < newStr.length; i++){
        const allLowerCaseLetters = newStr[i].toLowerCase();
        if (count[allLowerCaseLetters]) {
            count[allLowerCaseLetters] += 1;
        } else {
            count[allLowerCaseLetters] = 1;
        }
    }
    return count;
}

module.exports = letterCount;
