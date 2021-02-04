import axios from 'axios';
import renderMainFocus from './renderMainFocus';

export default () => {
  const $closeBtn = document.querySelector('.main-todo-close-btn');
  const $mainFocus = document.querySelector('.main-focus');
  const $mainTodoList = document.querySelector('.main-todo-list');

  const deleteMainFocus = async () => {
    const res = await axios.delete('http://localhost:8000/focus');
    renderMainFocus(res.data);
    $mainFocus.classList.add('is-active');
    $mainTodoList.classList.remove('is-active');
  };
  $closeBtn.addEventListener('click', deleteMainFocus);
};
