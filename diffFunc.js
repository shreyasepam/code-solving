/***
 * 
 * topic:
 * 
 * Syntax
 * this
 * constructor
 * arguments
 * 
 * 
 * Regular function
 */


//syntax

//RF
function regularFunction(){
    //
}

//AF
const arrowFunction = () => {
    
}

//this

//in RF the this has value refers to where the function is called.

function rf1(){
    this // refers to window obj
}

const obj = {
    name: "he",
    greet: function() {console.log("hello", this.name)}
}

obj.greet(); // refers to obj;


//Arrow function Af doesnt have this of its own, this is lexically inherited from he outer function where it is defined.4



//note
//this for RF refers to context from where it is called
//This for the AF refers to lexical inhertnace(context) from where it is defined.
//Lexical is accessbility of variable from a function from where it is defined not called.

