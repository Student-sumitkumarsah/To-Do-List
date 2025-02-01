const inputbox=document.getElementById('inpuBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');


let editTodo=null;

const addtodo= ()=>{
    const inputText=inputbox.value.trim();
    if(inputText.length<=0){
        alert("You must Write somthing in your to do");
        return false;
    
    }

    if(addBtn.value==="Edit"){
        editTodo.target.previousElementSibling.innerHTML=inputText;
        addBtn.value="Add";
        inputbox.value="";

    }
    else{
        // creat a li and p tag
        const li=document.createElement('li');
        const p=document.createElement('p');
        p.innerHTML=inputText;
        li.appendChild(p);


        // creat a edit button
        const editBtn=document.createElement("button")
        editBtn.innerText="Edit";
        editBtn.classList.add('btn','editBtn');
        li.appendChild(editBtn);


        


        // creat a remove button
        const deletBtn=document.createElement("button")
        deletBtn.innerText="Remove";
        deletBtn.classList.add('btn','deleBtn');
        li.appendChild(deletBtn);

        todoList.appendChild(li);
        inputbox.value="";


        
    }
    
    
}
const updateTodo=(e)=>{
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML==="Edit"){
        inputbox.value=e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addBtn.value="Edit";
        editTodo=e;
    }

}


addBtn.addEventListener('click',addtodo);
todoList.addEventListener('click',updateTodo);