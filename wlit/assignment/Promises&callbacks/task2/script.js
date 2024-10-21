//using callback
function add(){
    sum=0
    for (i =1;i<5;i++){
        sum+=i
    }
    return sum
}
function compute(callback){
    return callback;
}
console.log("sum using callback: "+compute(add()))

//using promises
const promise = new Promise((resolve,reject)=>{
    let sum=0
    for (i =1;i<5;i++){
        sum+=i
    }
    if (sum == 10){
        resolve(sum);
    }
    else{
        reject(sum)
    }
}).then((result)=>{
    console.log("sum using promises : "+ result )
})


//async-await
const addd = async function () {
    return new Promise((resolve) => {
        let sum = 0;
        for (let i = 1; i <= 4; i++) {
            sum += i;
        }
        resolve(sum);
    });
};

async function main() {
    const sum = await addd(); 
    console.log("Sum using async-await: " + sum);
}

main(); 


