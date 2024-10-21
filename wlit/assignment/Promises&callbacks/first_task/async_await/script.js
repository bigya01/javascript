const fetchAPI = async function(){
    try{
        const res= await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data =await res.json();
        document.getElementById("title").textContent="Title : "+data.title
        document.getElementById("Id").textContent="ID : "+data.id
        document.getElementById("UserId").textContent="UserId : "+data.userId
        document.getElementById("Body").textContent="Body : "+data.body
    

    }
    catch (error){
        console.log("error: ",error)
    }
};
fetchAPI();