import axios from 'axios';
import render from './render';

const $todoListContent = document.querySelector('.todo-list-content');

export default () => {
  const removeTodo = async id => {
    const res = await axios.delete(`http://localhost:8000/todos/${id}`);
    const rawTodos = res.data;
    render(rawTodos);
  };

  $todoListContent.onclick = e => {
    if (!e.target.matches('.todo-list-content > li > .todo-list-remove')) return;
    removeTodo(e.target.parentNode.id);
  };
};
