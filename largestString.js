/**
 * 
 * largest string from sentence
 */

const largestString = (str) => {
    const strArray = str.split(" ").sort((a, b) => b.length - a.length);
    return strArray[0];
}

const largestString2 = (str) => {
    let countStr = "";
    let maxCountStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            countStr += str[i];
        } else {
            maxCountStr = maxCountStr.length > countStr.length ? maxCountStr : countStr;
            countStr = "";
        }
    }
    return maxCountStr;
}
console.log(largestString("this is it, Largest , and the must be large"))
console.log(largestString2("this is it, Largest , and the must be large"))