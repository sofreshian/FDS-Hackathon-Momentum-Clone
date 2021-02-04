export default () => {
  const $mainTodoCheckBox = document.querySelector('.main-todo-checkbox');
  const $mainTodoContent = document.querySelector('.main-todo-text-content');

  $mainTodoCheckBox.addEventListener('change', e => {
    if (e.target.checked)
      $mainTodoContent.style.textDecoration = 'line-through';
    else $mainTodoContent.style.textDecoration = 'none';
  });
};
