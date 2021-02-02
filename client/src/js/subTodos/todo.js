import getTodos from './getTodos';
import addTodo from './addTodo';

const allTodos = () => {
  getTodos();
  addTodo();
};

export default allTodos;
