import axios from 'axios';
import render from './render';
// import state from './todoState';

const $todoListContent = document.querySelector('.todo-list-content');

export default () => {
  const toggleTodo = async id => {
    const res = await axios.get('http://localhost:8000/todos');
    const state = res.data;
    const completed = !state.find(todo => todo.id === +id).completed;
    const resTwo = await axios.patch(`http://localhost:8000/todos/${id}`, { completed });
    render(resTwo.data);
  };

  $todoListContent.onchange = e => {
    toggleTodo(e.target.parentNode.id);
  };
};
