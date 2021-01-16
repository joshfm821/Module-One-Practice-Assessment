/**
 * Return the product of all odd numbers in an array. 
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 * 
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */

const productOfOddNumbers = (nums) => {
    let product = 1;
    let isEven = nums.every((num) => {
       return num % 2 === 0;
    })
    if (isEven) {
        return 0;
    }
    nums.forEach((el) => {
        if( el % 2 === 1) {
            product *= el;
        }
    })
    return product;
 }

 module.exports = productOfOddNumbers