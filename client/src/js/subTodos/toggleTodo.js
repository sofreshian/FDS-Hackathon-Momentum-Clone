import render from './render';
import state from './todoState';

const $todoListContent = document.querySelector('.todo-list-content');

export default () => {
  const toggleTodo = async id => {
    const completed = !state.todos.find(todo => todo.id === +id).completed;
    // const todo = todos.todos.find(item => item.id === +id);
    const res = await fetch(`http://localhost:8000/todos/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ completed })
    });

    const rawTodos = await res.json();
    render(rawTodos);
  };

  $todoListContent.onchange = e => {
    toggleTodo(e.target.parentNode.id);
  };
};
