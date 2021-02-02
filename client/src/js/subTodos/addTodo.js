import render from './render';
import todos from './todoState';

const $todoListInput = document.querySelector('.todo-list-input');

export default () => {
  // 아이디 생성부분
  const generateId = () =>
    todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

  //  addTodo 함수
  const addTodo = async content => {
    const res = await fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id: generateId(),
        content,
        completed: false
      })
    });

    const rawTodos = await res.json();
    render(rawTodos);
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
