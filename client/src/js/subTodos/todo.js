import getTodos from './getTodos';
import addTodo from './addTodo';
import removeTodo from './removeTodo';

const allTodos = () => {
  getTodos();
  addTodo();
  removeTodo();
};

export default allTodos;
