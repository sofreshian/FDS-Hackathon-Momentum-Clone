import render from './render';

const $todoListContent = document.querySelector('.todo-list-content');

export default () => {
  const removeTodo = async id => {
    const res = await fetch(`http://localhost:8000/todos/${id}`, {
      method: 'DELETE'
    });

    const rawTodos = await res.json();
    render(rawTodos);
  };

  $todoListContent.onclick = e => {
    if (!e.target.matches('.todo-list-content > li > .todo-list-remove')) return;
    removeTodo(e.target.parentNode.id);
    // console.log(e.target.parentNode.id);
  };
};
