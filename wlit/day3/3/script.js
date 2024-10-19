const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("successful")
        reject("rejected")
    },5000)
})

promise.then((response)=>{
    console.log("Response: ",response)
}).catch((error)=>{
    console.log("error", error)
})

console.log("hello")



// const fetchAPI = async function () {
//     const res = fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res;
//     console.log("Data fetched!", data);
//   };
//   fetchAPI();
//   console.log("Hi I am executing!");