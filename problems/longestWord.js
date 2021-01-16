/**
 * Returns the longest word in the array.
 * Ties should go to the earlier word
 * @param {string[]} words - an array containing words
 * @returns {string} - longest word
 *
 * ex: longestWord(["cat", "bird", "hello", "corey", "do"])
 * returns "hello"
 */

const longestWord = words => {
    let largestWord = -Infinity;
    let wordLength;
    for(let i = 0; i < words.length; i++){
        if (words[i].length > largestWord) {
            largestWord = words[i].length;
            wordLength = words[i];
        }
    }
    return wordLength;
}

module.exports = longestWord;
