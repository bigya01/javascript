const DEMO_URL ="https://jsonplaceholder.typicode.com/posts"
const request = fetch(DEMO_URL)
    .then((response) =>{
    console.log(response);
    return response.json();
})
then((data) => {
    data.forEach((post) => {
        console.log(`ID: ${post.id}, Title: ${post.title}`);
      });
})
.catch ((error)=>{
    console.log("error: ",error)
})