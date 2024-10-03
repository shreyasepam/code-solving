

const stringCombination = (str) => {
    const results = [];

    const permuate = (array, memo=[]) => {
        if(array.length === 0){
            results.push(memo.join(""))
        }else {
            for (let index = 0; index < array.length; index++) {
                const currentArray = array.slice();
                const nextArray = currentArray.splice(index, 1);
                permuate(currentArray.slice(), memo.concat(nextArray))
            }
        }
    }
    permuate(str.split(""));
    return results;
}


console.log(stringCombination("abcd"));
