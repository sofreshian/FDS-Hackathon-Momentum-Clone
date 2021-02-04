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
    renderMainFocus(res.data);
    $mainFocus.classList.remove('is-active');
    $mainTodoList.classList.add('is-active');
    $mainFocusInput.value = '';
  };
  $mainFocusInput.addEventListener('keyup', addMainFocus);
};
