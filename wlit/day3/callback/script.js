function add (x,y){
    return x+y
}
function divide (x,y){
    return x/y
}
function sub (x,y){
    return x-y
}
function mul (x,y){
    return x*y
}

function compute(callback,x,y){
    return callback(x,y)
}


console.log(compute(add,10,5))
console.log(compute(divide,10,5))
console.log(compute(sub,10,5))
console.log(compute(mul,10,5))