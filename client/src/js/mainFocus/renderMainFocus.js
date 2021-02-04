export default focus => {
  // DOM
  const $mainFocus = document.querySelector('.main-focus');
  const $mainTodoList = document.querySelector('.main-todo-list');
  const $mainTodo = document.querySelector('.main-todo-text-content');

  if (focus) {
    $mainFocus.classList.remove('is-active');
    $mainTodoList.classList.add('is-active');
  } else {
    $mainFocus.classList.add('is-active');
    $mainTodoList.classList.remove('is-active');
  }
  $mainTodo.textContent = focus;
};
