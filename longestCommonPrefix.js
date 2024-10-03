/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 * 
 */

const longestCommonPrefix = (array) => {
    if (array.length === 0) return "";
    const sortLen = array.sort((a, b) => a.length - b.length);
    let prefix = sortLen[0];
    for (let i = 1; i < sortLen.length; i++) {
        while (sortLen[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))

const longestCommonPrefix2 = (array) => {
    if (array.length === 0) return "";
    const _sort = array.sort((a, b) => a.length - b.length);
    const smallest = _sort[0];
    let prefix = "";
    for (let i = 0; i < smallest.length; i++) {
        const _filter = _sort.map(x => x.slice(i, i + 1)).filter(x => x !== smallest[i])
        if (_filter.length <= 0) {
            prefix += smallest[i];
        }else{
            return prefix;
        }
    }
}

console.log(longestCommonPrefix2(["flower", "flow", "floight"]))