
// /**
//  * 
//  for (var i = 0; i < 3; i++) {
// setTimeout(() => console.log(i), 1);
// }
//  */

// //sol-1 replace var with let 
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// //sol2 make it as clouse function
// for (var i = 0; i < 3; i++) {
//     (function (_i) {
//         setTimeout(function () { console.log(_i) }, 1);
//     })(i)
// }

// /**
//  * 
// var InputArr = [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];
// var outputArr = [{p:2},{},{p:4},{},{p:6},{},{},{p:9}]
//  */

// var InputArr = [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];

// const convert = () => {
//     const _sort = InputArr.sort((a, b) => a.p - b.p).map(x => x.p);
//     const min = _sort[0];
//     const max = _sort[_sort.length - 1];
//     let resut = [];
//     for (let i = min; i <= max; i++) {
//         if (_sort.includes(i)) {
//             resut.push({ p: i })
//         } else {
//             resut.push({})
//         }
//     }
//     return resut;
// }

// // console.log("convert", convert())


// const arr = [1,2,3,4,5];

// arr.forEach(element => {
//     if(element <=3){
//     console.log("wertyui",element)
//         return;
//     }
// });


// arr.map(x => {
//     console.log("mapper", x);
//     return;
// })

// console.log("Completed")







async function test() {
    console.log(1);

    Promise.resolve().then(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 0)
    })

    setTimeout(() => {
        console.log(4);
        Promise.resolve().then(() => {
            console.log(5);
        })
    }, 0)

    console.log(6);
}

// test(); //1,6,2,4,5,3


// const obj = {
//     "name":"shreyas",
//     address:{
//         city:"bengaluru"
//     }
// }

// setTimeout(() => {
//     Object.freeze(obj);
// },0)
// obj.age = 28;

// console.log(obj)


// console.log(1 + "2" + "2"); 
// console.log(1 + +"2" + "2");
// console.log(20 == "20");
// console.log(20 ===+"20");

// var obj = {
//     1:"Hello"
// };
// var change = function(param){
//     param["1"] = "go"
// }
// change(obj)
// console.log(obj)

// fetch("").then(respone => respone.json()).then(data => data);


// datatyes in js

// primitive type;
//     Number, boolean, string, undefined, null;

// Refrence type
//     Object, array, function, date


// const closures = () => {
//     let count = 0;

//     return () => {
//         return ++count;
//     }
// }

// const init = closures();
// console.log("closures", init())
// console.log("closures", init())
// console.log("closures", init())
// console.log("closures", init())
// console.log("closures", init())


// for(var i = 0; i<=3; i++){
//     (function(){
//         const _self = i;
//         setTimeout(() => {
//             console.log("forClosrues",_self);
//         },100)
//     }(i))
// }


// var obj ="s1"

// const change = (param) => {
//     console.log(param)
//     param = "s2"
//     console.log(param)

// }
// change(obj)
// console.log(obj)

