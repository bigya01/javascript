document.addEventListener('DOMContentLoaded',function(){
    
    
    const list= document.querySelector("#movie-list ul");
    const del= document.querySelectorAll('.delete');
    const forms= document.forms;

    //delete movies
    del.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });


    //to add movie paila element banau ani text ani classes for css
    // add movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',function(e){
    e.preventDefault();


    //element
    const value =addForm.querySelector('input[type ="text"]').value;
    const li =document.createElement('li');
    const movieName=document.createElement('span');
    const deleteBtn= document.createElement('span');
    
    //aba text value bata leu
    movieName.textContent=value;
    deleteBtn.textContent='Delete';

    //styles 
    movieName.classList.add('name');
    deleteBtn.classList.add('delete');

    //dom
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

})

})