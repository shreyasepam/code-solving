/**
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true
 */

const cal = {
    "{": 1,
    "}": 1,
    "(": 2,
    ")": 2,
    "[": 3,
    "]": 3,
}


const validParentheses2 = (str) => {
    const strArray = str.split("").map(x => cal[x]);
    if (strArray.length % 2 !== 0) {
        return false;
    }
    let i = 0;
    while (strArray.length > 0) {
        if (strArray[i] === strArray[i + 1]) {
            strArray.splice(i, 2);
            i = -1;
        } else if (i === strArray.length - 1) {
            return false;
        }
        i++
    }
    return true;
}

const validParentheses = (strs) => {
    const temp = [];
    const cal = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    for(let str in strs){
        if(cal[str]){
            if(cal[str] !== temp.pop()){
                return false;
            }
        }else{
            temp.push(str);
        }
    }
    return temp.length === 0
};

console.log(validParentheses("({]()]})[]"))
// console.log(validParentheses("()[]{}"))
// console.log(validParentheses("(]"))
// console.log(validParentheses("([])"))
