const form =document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault(); //form submit hune bittikai clear nahos vanera
    const div = document.getElementById("box")
    const bgcolor = document.getElementById("bgcolor")
    const txtcol= document.getElementById("text-color")
    const txt= document.getElementById("txt")

    div.style.backgroundColor = bgcolor.value;
    div.style.color =txtcol.value
    div.textContent=txt.value
})