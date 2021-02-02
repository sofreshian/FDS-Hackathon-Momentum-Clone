import getTodos from './getTodos';
import addTodo from './addTodo';
import removeTodo from './removeTodo';
import toggleTodo from './toggleTodo';

const allTodos = () => {
  getTodos();
  addTodo();
  removeTodo();
  toggleTodo();
};

export default allTodos;
