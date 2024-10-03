/**
 * 
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

const palindromeNumber = (nums) => {
    if(nums < 0){
        return false;
    }
    const _nums = nums.toString();
    for(let i = 0; i < _nums.length;  i++){
        const diff = _nums.length - 1 - i;
        if(!(_nums[i] === _nums[diff])){
            return false
        }
    }
    return true;
}
console.log(palindromeNumber(121))
console.log(palindromeNumber(-121))
console.log(palindromeNumber(10))
