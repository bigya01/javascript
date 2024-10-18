const box =document.getElementById("box");

box.addEventListener("mouseover",function (){
    box.style.backgroundColor = "red";
});

box.addEventListener("dblclick", function (){
    alert("clicked");
});

const input= document.getElementById("input")
input.addEventListener("keydown", function(event){
    console.log("Down key pressed", event.key);
})

const form =document.querySelector("form") // selects forms which is at first
console.log("form")

form.addEventListener("submit", function(event){
    event.preventDefault(); //form submit hune bittikai clear nahos vanera
    console.log("FOrm submitted")

    const username= document.getElementById("username")
    const password= document.getElementById("password")
    console.log("username:  " , username.value )
    console.log("password:  ",password.value)

})
