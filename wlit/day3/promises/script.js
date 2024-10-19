const DEMO_URL ="https://jsonplaceholder.typicode.com/posts"
const request = fetch(DEMO_URL)
    .then((response) =>{
    console.log(response);
    return response.json();
})
then((data) => console.log(data))
.catch ((error)=>{
    console.log("error: ",error)
})