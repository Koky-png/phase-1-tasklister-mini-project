document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const form = document.getElementById("create-task-form");
  const list = document.getElementById("tasks");
 form.onsubmit = (e) =>{
   e.preventDefault();
   task = document.getElementById("new-task-description").value;
   color = document.getElementById("select_colors").value
   list.appendChild(addTodoList(task,color))
   form.reset()
 }
 function addTodoList(todo,colors){
   let lists = document.createElement("li")
   lists.textContent = todo;
   lists.style.color = colors;
   // add delete button
   let deleteButton = document.createComment("button");
   deleteButton.textContent = "x";
   lists.appendChild(deleteButton);
   deleteButton.onclick = () =>{
     lists.remove()
   }
   return lists;
 }
 });
