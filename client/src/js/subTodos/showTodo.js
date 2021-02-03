const $todoListBtn = document.querySelector('.todo-list-btn');
const $todoListPopup = document.querySelector('.todo-list-popup');

export default () => {
  const showTodo = () => {
    $todoListPopup.classList.toggle('is-active');
  };

  $todoListBtn.onclick = showTodo;
};
