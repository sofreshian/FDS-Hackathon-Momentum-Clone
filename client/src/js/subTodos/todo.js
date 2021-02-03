import getTodos from './getTodos';
import addTodo from './addTodo';
import removeTodo from './removeTodo';
import toggleTodo from './toggleTodo';
import showTodo from './showTodo';

const allTodos = () => {
  getTodos();
  addTodo();
  removeTodo();
  toggleTodo();
  showTodo();
};

export default allTodos;
