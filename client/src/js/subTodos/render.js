import state from './todoState';

const $todoListContent = document.querySelector('.todo-list-content');

const render = _todos => {
  let html = '';
  state.todos = _todos;
  state.todos.forEach(({ id, content, completed }) => {
    html += `  
    <li id="${id}" class="todo-list-item">
        <input id="ck-${id}" class="todo-list-checkbox" type="checkbox" ${
      completed ? 'checked' : ''
    }>
        <label for="ck-${id}">${content}</label>
        <i class="far fa-times-circle todo-list-remove"></i>
    </li>
        `;
  });
  $todoListContent.innerHTML = html;
};

export default render;
