import render from './render';

const getTodos = async () => {
  const res = await fetch('http://localhost:8000/todos');
  const rawTodos = await res.json();
  render(rawTodos);
};

export default getTodos;
