
/**
 * 
 * During hoisting the function is given highest prefrence
 * so at first temp is assigned to function
 * then temp is assigned to variable
 * 
 * so anser it is 0,0  
 */

var temp = 0;
console.log(temp); //0

function temp() {
    console.log("This is functrion")
}

console.log(temp);//0