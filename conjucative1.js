/**
 * Calculate conjucative max 1's length
 * 
 */

const nums = [1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1];

const cal = (array) => {
    const strArray = array.join("").split("0").sort((a, b) => b.length - a.length);
    return strArray[0]?.length;
}

const cal2 = (array) => {
    let count = 0;
    let maxCount = 0;
    for(let i = 0 ; i < array.length; i++){
        const current = array[i];
        if(current){
            count++
        }else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    return maxCount
}

console.log(cal(nums))
console.log(cal2(nums))