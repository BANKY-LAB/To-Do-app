const button = document.getElementById("Add-button");
const input = document.querySelector("input");

button.addEventListener("click", createTodo);

//maping a key to initiate function todo
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
     createTodo()
    };
   });


   // main TODO function 
function createTodo() {
  let input = button.previousElementSibling;
  let ul = document.getElementById("todo-container");
  const todo = input.value;
  let li = document.createElement("li");
  li.textContent = todo.trim();

  // this code stop loging an empty strings
  if (input.value === "") {
    return;
  } else {
    ul.append(li);
  }
  //addin the fuction to indicate done todos

  li.onclick = (event => {
    li.classList.toggle("completed");
   })
  //this is the delete button
  
  let span = document.createElement("span");
  const delbtn = document.createElement("button");
  delbtn.textContent = "X";
  span.appendChild(delbtn);
  li.append(span);
  
  
  input.value = "";
  // this is a little function to remove each todo from the list
  delbtn.addEventListener("dblclick", (event) => {
    li.remove();
  });
}




