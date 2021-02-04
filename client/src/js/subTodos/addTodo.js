import axios from 'axios';
import render from './render';
import getTodos from './getTodos';
// import state from './todoState';

const $todoListInput = document.querySelector('.todo-list-input');

export default () => {
  // 아이디 생성부분
  const generateId = async () => {
    try {
      const res = await axios.get('http://localhost:8000/todos')
      return res.data.length
        ? Math.max(...res.data.map(todo => todo.id)) + 1
        : 1;
    } catch (err) {
      console.error(err);
    }
  };

  //  addTodo 함수
  const addTodo = async content => {
    try {
      const id = await generateId();
      const res = await axios.post('http://localhost:8000/todos', { id, content, completed: false });
      const rawTodos = res.data;
      render(rawTodos);
    } catch (err) {
      console.error(err);
    }
  };

  // Input 이벤트
  $todoListInput.onkeyup = ({
    keyCode,
    target
  }) => {
    const content = target.value.trim();
    if (keyCode !== 13 || content === '') return;
    addTodo(content);
    target.value = '';
  };
};
