const heading = document.getElementById("heading");
console.log(heading)

heading.textContent="The content is changed"

const paragraph = document.getElementById("paragraph");
console.log(paragraph)

paragraph.textContent="The paragraph is changed"

const newElement = document.createElement("d");
newElement.textContent="THis is new element";

const cont =document.getElementById("container")
cont.appendChild(newElement)

const input = document.getElementById("inputt")
input.value=" new value"

const box =document.getElementsByClassName("box")[0] //class gives you array
console.log(box)

box.style.backgroundColor= "pink";
box.style.width ="200px";

const elementToRemove = document.getElementById("tobeRemoved")
console.log(elementToRemove);
elementToRemove.remove()