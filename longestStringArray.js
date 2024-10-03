/**
 * 
 * find longest string from array
 */


const longestString = (array) => {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result = array[i].length > result.length ? array[i] : result;
    }
    return result;
}

const array = ["qwe", "qwerwqr", "qwezsxcqwe", "awwqezsfsdgfsef", "asdasd", "adsftasvdnj", "Asdasd"]
console.log(longestString(array));



//call, apply, binf
const person = {
    name:"shreyas"
}

//call -> this is to call a function with this and argument are provided individually
//here the function executed immedialty, if we know exact number of args then we can use call
    function caller(age, gender){
        this.age = age;
        this.gender= gender;
    }
    caller.call(person, 28, "male")
    console.log("caller", person);
    

//apply -> this is similar to call, the this is provided and argumaents are passed via array
//here the function exection happen immedianlty, when the araguments are in form of array or dymaic then we can us this

function applyer (age, gender){
    this.age = age;
    this.gender = gender;
}

applyer.apply(person, [29, "male"])
console.log("caller", person);

//bind -> this create a new function and that new function when called behave similar tlike call, this and arguamnets are passed individually
//here the function execution is delayed. The arguments are similar to call. It also create new function.
function binder (age, gender){
    this.age = age;
    this.gender = gender;
}

const _binder = binder.bind(person, 30, "male");
_binder();

console.log("binder", person);

