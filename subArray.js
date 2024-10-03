


const subArray = (array, size) => {
    let minLength = 0;
    let maxLength = size;
    let newArray = [];
    while(maxLength <= array.length){
        newArray.push(array.slice(minLength, maxLength));
        maxLength++;
        minLength++;
    }

    const result = newArray.reduce((total, current) => {
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER
        current.forEach(element => {
            min = Math.min(min, element);
            max = Math.max(max, element);
        });
        total += (min + max);
        return total;
    },0)
    console.log(newArray);
    return result;
}

console.log("myValue-1", subArray([2,5,-1,7,-3,-1,-2], 4));
console.log("myValue-2", subArray([2,5,3,7,6], 4));
