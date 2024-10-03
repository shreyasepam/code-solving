
const flatenArray = (array) => {
    let result = [];
    array.map((x) => {
        if(Array.isArray(x)){
            result = result.concat(flatenArray(x));
        }else {
            result.push(x);
        }
    })
    return result;
}

const array = [1,[2,3],4,[5,[6],7], [[8],[9, [10]]]]
console.log(flatenArray(array))



