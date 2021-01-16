/**
 * Return the third largest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third largest number
 *
 * ex: thirdLargest([12, 3, 8, 2, 1, 14])
 * returns 8
 */

const thirdLargest = nums => {
    // let largestMin = -nums[0];
    // let largest2ndMin = -nums[0];
    // let largest3rdMin = -nums[0];
    // if (nums.length < 3) {
    //     return null;
    // } else {
    //     for(let i = 0; i < nums.length; i++){
    //         if(nums[i] < largestMin){
    //         largestMin = nums[i];  
    //         largest2ndMin = nums[i];   
    //         }
    //     }
    
    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] > largestMin)
    //         largestMin = nums[i]
    //     }
    
    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] < largestMin && nums[i] > largest2ndMin)
    //         largest2ndMin = nums[i];
    //     }

    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] < largest2ndMin && nums[i] > largest3rdMin)
    //         largest3rdMin = nums[i];
    //     }
    //     return largest3rdMin;
    // }
    if(nums.length < 3) return null;
    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;
    let thirdLargestNum = -Infinity;

    nums.forEach((num) =>{
        if (num > largestNum) {
            thirdLargestNum = secondLargestNum;
            secondLargestNum = largestNum;
            largestNum = num;
        } else if (num > secondLargestNum) {
            thirdLargestNum = secondLargestNum;
            secondLargestNum = num;
        } else if (num > thirdLargestNum) {
            thirdLargestNum = num;
        }
    });
    return thirdLargestNum;
}



module.exports = thirdLargest