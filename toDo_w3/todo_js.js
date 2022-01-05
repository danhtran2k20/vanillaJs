var list = $('.container');
let form = $('.add-form');
const btnForm = $('.btn-toggle-form');
list.addEventListener(
  'dblclick',
  function (ev) {
    if (ev.target.classList.contains('task')) {
      ev.target.classList.toggle('reminder');
    }
  },
  false
);
btnForm.onclick = function (ev) {
  ev.target.classList.toggle('btn-close-form');
  form.classList.toggle('add-form-show');
  btnForm.innerHTML = btnForm.classList.contains('btn-close-form')
    ? 'Close'
    : 'Add';
};
document.querySelectorAll('.btn-delete-task').forEach((el) => {
  el.onclick = function () {
    this.closest('.task').style.display = 'none';
  };
});
function newElement() {
  var inputTaskName = $('#taskName').value;
  var inputTaskTime = $('#taskTime').value;
  var inputTaskReminder = $('#taskReminder').checked;
  if (!inputTaskName) {
    alert('Please add a task');
    return;
  }
  const newTask = `<div class="task ${inputTaskReminder ? 'reminder' : ''}">
    <div class="task-content">
      <h3>${inputTaskName}</h3>
      <p>${inputTaskTime}</p>
    </div>
    <div class="btn-delete-task" onClick="this.parentElement.style.display = 'none'">✕</div>
  </div>`;
  list.insertAdjacentHTML('beforeend', newTask);
  form.reset();
}
function $(str) {
  return document.querySelector(str);
}
