document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    // Retrieve the task description from the input field
    const taskInput = document.getElementById("new-task-description");
    const task = taskInput.value;

    if (task) { 
      const listItem = document.createElement('li');
      listItem.textContent = task;
      taskList.appendChild(listItem); 

      taskInput.value = ''; 
    }
  });

  let clear = document.getElementById('clear')
  clear.addEventListener('click', () => {
    taskList.innerHTML = '';
  })



});
