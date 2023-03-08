document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let taskText = document.getElementById("new-task-description").value;
    buildToDo(taskText);
    form.reset();
  })
})

function buildToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X '
  li.textContent = `${todo} `;
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}