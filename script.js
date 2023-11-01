const textInput = document.querySelector("#toDo");
const btnSubmit = document.querySelector("#btnSubmit");
const submitForm = document.querySelector("form");
const divContent = document.querySelector("#content");
const list = document.querySelector("ul");

let toDos = JSON.parse(localStorage.getItem("todos")) || [];

for(let todo of toDos){
    const newToDo = document.createElement("li");
    newToDo.innerText = todo.task;
    newToDo.isCompleted = todo.isCompleted;
    if (newToDo.isCompleted) newToDo.style.textDecoration = "line-through";

    const newBtnRemove = document.createElement("button");
    const newBtnCross = document.createElement("button");

    newBtnRemove.innerText = "Remove To-Do"
    newBtnCross.innerText = "Cross To-Do"

    newBtnRemove.id = "remove";
    newBtnCross.id = "cross";

    newToDo.appendChild(newBtnRemove)
    newToDo.appendChild(newBtnCross)

    newToDo.isCompleted = false;

    list.appendChild(newToDo);
}


// console.log(textInput);

// btnSubmit.addEventListener('submit')

submitForm.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(e.target);
    addToDo();
})

function addToDo(){
    const newToDo = document.createElement("li");
    newToDo.innerText = textInput.value;
    // console.log(newToDo.innerText);

    toDos.push({task: newToDo.innerText, isCompleted: false});
    localStorage.setItem("todos", JSON.stringify(toDos));
    
    const newBtnRemove = document.createElement("button");
    const newBtnCross = document.createElement("button");

    newBtnRemove.innerText = "Remove To-Do"
    newBtnCross.innerText = "Cross To-Do"

    newBtnRemove.id = "remove";
    newBtnCross.id = "cross";

    newToDo.appendChild(newBtnRemove)
    newToDo.appendChild(newBtnCross)

    newToDo.isCompleted = false;

    list.appendChild(newToDo);    

    
}

list.addEventListener("click", function(e){
    if(e.target.id == "remove"){
        // console.log(toDos);
        // console.log(toDos[0].task);

        for(let i = 0; i <toDos.length; i++){
            // console.log(toDos[i].task);
            // console.log(e.target.parentElement.innerText);
            let listTask = e.target.parentElement.innerText;
            listTask = listTask.substring(0, listTask.indexOf("Remove"));
            if(toDos[i].task == listTask){
                let updatedToDos = toDos.filter(todo => todo.task !== listTask);
                localStorage.setItem("todos", JSON.stringify(updatedToDos));
                break;
            }
        }


        e.target.parentElement.remove();
    }
    else if(e.target.id == "cross"){
        if(e.target.parentElement.style.textDecoration == "line-through"){
            e.target.parentElement.style.textDecoration = "none";
            e.target.parentElement.isCompleted = "false";
        }
        else e.target.parentElement.style.textDecoration = "line-through";
    }
})