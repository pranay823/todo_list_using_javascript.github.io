const todoform = document.querySelector(".form-todo");
const todoinput = document.querySelector(".form-todo input[type='text']")
const todolist = document.querySelector(".todo-list");

todoform.addEventListener("submit",(e)=>{
  e.preventDefault();
  const newtodotext = todoinput.value;
  const newli = document.createElement("li");
  const newliinnerhtml = `  <span class="text">${todoinput.value}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`

   newli.innerHTML = newliinnerhtml;
   todolist.append(newli);
  todoinput.value =" "
})

todolist.addEventListener("click",(e)=>{
 if(e.target.classList.contains("done")){
   const lispan = e.target.parentNode.previousElementSibling;
   lispan.style.textDecoration = "line-through"
}
if(e.target.classList.contains("remove")){
    const li = e.target.parentNode.parentNode
    li.remove();
}
})