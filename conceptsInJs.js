/**
 * 
 * 
 * variables
 * functions
 * datatypes
 * scopes
 * async/await
 * event handlers
 * objects
 * operators
 * dom
 * error handling
 * 
 */

/**
 * one-way-binding, react flows one-way-data binding. consider an input tag now we need setState and onChange to 
 * handle or capture the input values
 * 
 * 
 * two way data binding, angular flows two-way=data binding.  consider an input tag, now decalre a 
 * varribale and pass it to ngmodle then ngmodle will take care of handlers
 */


/**
 * es6
 * 
 * let and const
 * template litral ie  back ticks
 * arrow function
 * promise
 * rest, spread
 * destructing
 * import/export
 * 
 */

Array.prototype.sum = function(selector){
   return this.reduce((total, current) => {
    total += selector ? selector(current) : current;
    return total
   },0)
}

console.log([{n:1}, {n:2}, {n:3}, {n:4}].sum());


//push all zeros to front;

const pushArray = [1,0,0,1,1,1,0,0,1,0,1,1,0,0,1];

const pushZero = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
       if(array[i]){
        result.push(array[i])
       }else {
        result.unshift(array[i]);
       }
    }
    return result;
}

console.log(pushZero(pushArray));

//one

var myObject = {

    foo: "bar",
    
    func: function() {
    
    var self = this;
    
    console.log("outer func: this.foo = " + this.foo); //bar
    
    console.log("outer func: self.foo = " + self.foo); //bar
    
    (function() {
    
    console.log("inner func: this.foo = " + this.foo); //undefined
    
    console.log("inner func: self.foo = " + self.foo); //bar
    
    }());
    
    }
    
    };

    myObject.func();

    console.log(typeof typeof 1) 


    for(var i=0;i<=9; i++){
        (function() {
            const self = i;
            setTimeout(() => {
                console.log("Timed", self);
                
        }, 0)
        })(i)
    }


