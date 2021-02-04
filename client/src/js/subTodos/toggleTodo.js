import axios from 'axios';
import render from './render';
// import state from './todoState';

const state = axios
  .get('http://localhost:8000/todos')
  .then(({ data: _todos }) => _todos);
const $todoListContent = document.querySelector('.todo-list-content');

export default () => {
  const toggleTodo = async id => {
    const completed = !state.find(todo => todo.id === +id).completed;
    axios
      .patch(`http://localhost:8000/todos/${id}`, { completed })
      .then(render)
      .catch(console.error);
  };

  $todoListContent.onchange = e => {
    toggleTodo(e.target.parentNode.id);
  };
};
