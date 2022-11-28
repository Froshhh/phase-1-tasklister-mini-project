document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (e) => createNewTask(e));

  const createNewTask = (e) => {
    e.preventDefault();
    const talkDescription = document.querySelector(
      "#new-task-description"
    ).value;
    const taskLi = document.createElement("li");
    taskLi.innerText = talkDescription;
    const taskUl = document.querySelector("#tasks");
    taskUl.appendChild(taskLi);
    form.reset();
  };
});
