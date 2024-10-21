const DEMO_URL ="https://jsonplaceholder.typicode.com/posts/1"
const request = fetch(DEMO_URL)
    .then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    document.getElementById("title").textContent="Title : "+data.title
    document.getElementById("Id").textContent="ID : "+data.id
    document.getElementById("UserId").textContent="UserId : "+data.userId
    document.getElementById("Body").textContent="Body : "+data.body

})

.catch ((error)=>{
    console.log("error: ",error)
})