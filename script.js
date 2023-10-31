const input = document.querySelector("input[type='text']");
const btnSubmit = document.querySelector("#btnSubmit");
const submitForm = document.querySelector("form");
const divContent = document.querySelector("#content");


// console.log(input, btnSubmit);

// btnSubmit.addEventListener('submit')

submitForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target);
})

function addToDo(){
    const newToDo = document.createElement(input.innerText);
}