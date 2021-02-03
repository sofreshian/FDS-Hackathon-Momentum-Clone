import axios from 'axios';
import renderMainFocus from './renderMainFocus';

export default () => {
  const $mainFocusInput = document.querySelector('.main-focus-input');
  const $mainFocus = document.querySelector('.main-focus');
  const $mainTodoList = document.querySelector('.main-todo-list');

  const addMainFocus = async e => {
    if (e.key !== 'Enter') return;

    const res = await axios.post('http://localhost:8000/focus', {
      focus: $mainFocusInput.value
    });
    $mainFocus.classList.remove('is-active');
    $mainTodoList.classList.add('is-active');
    renderMainFocus(res.data);
    $mainFocusInput.value = '';
  };
  $mainFocusInput.addEventListener('keyup', addMainFocus);
};
