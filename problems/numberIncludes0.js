/**
 * Return if a given number includes 0. 
 * @param {number} num - a number
 * @returns {boolean} - is zero in the number
 *
 * ex: numberIncludes0(1023) //=> true
 * ex: numberIncludes0(123) //=> false
 *  
 */

const numberIncludes0 = num => {
    // stringNum = num.toString();
    // stringArr = stringNum.split('');
    // for (let i = 0; i < stringArr.length; i++) {
    //     if (stringArr[i].includes('0')){
    //         return true;
    //     }
    // }
    // return false;

    let numStr = num.toString();
    return numStr.includes('0');
}

module.exports = numberIncludes0;
