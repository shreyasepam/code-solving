


Array.prototype.sum = function () {
    return this.reduce((total, current) => {
        total += current;
        return total;
    }, 0)
}


const array = [1,2,3,4,5,6,7,8,9,10];

console.log(array.sum());


Array.prototype.gen = function () {
    return this.reduce((total, current) => {
        total += current;
        return total;
    }, 0)
}
