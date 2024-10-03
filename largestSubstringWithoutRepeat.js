
//GEEKSFORGEEKS
const largestSubstringWithoutRepeat = (str) => {
    let left = 0;
    let maxLength = 0;
    let temp = new Set();
    let result = [];
    for (let right = 0; right < str.length; right++) {
        const current = str[right];
        while (temp.has(current)) {
            temp.delete(str[left]);
            left++
        }
        temp.add(current);
        const pointer = right - left + 1;
        if (pointer > maxLength) {
            result = [str.substring(left, right + 1)]
            maxLength = pointer;
        } else if (pointer === maxLength) {
            result.push(str.substring(left, right + 1))
        }
    }
    return result;
}

// console.log(largestSubstringWithoutRepeat("GEEKSFORGEEKS"))

const largestSubstringWithoutRepeat2 = (str) => {
    for (let i = 0; i < str.length; i++) {
        let min = 0;
        let max = str.length - i;
        const temp = [];
        while (max <= str.length) {
            const current = str.slice(min, max);
            console.log(current)
            const currentSet = new Set(current);
            if (current.length === currentSet.size) {
                temp.push(current)
            }
            min++;
            max++;
        }
        if (temp.length > 0) {
            return temp;
        }
    }
    return [];
}

console.log(largestSubstringWithoutRepeat2("GEEKSFORGEEKS"))