
// functions


function firstFun (first, second = 10){
    let sum = first + second;
    return sum;
}

console.log(firstFun(10, 20)); // Output: 30

// spread function
function firstFun (...a){

    console.log(a); // [ 10, 20 ]
}

firstFun(10, 20);

// callback function
function one (){
    console.log("First function");
} 
function two (){
    console.log("Second function");
} 

two(one()); // Output: First function Second function

