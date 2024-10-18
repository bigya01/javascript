const form =document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault(); //form submit hune bittikai clear nahos vanera
    const div = document.getElementById("colorchange")
    const color = document.querySelector("#inputt")
    div.style.backgroundColor = color.value;
})