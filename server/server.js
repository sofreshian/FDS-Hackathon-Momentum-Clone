import express from 'express'; 
import cors from 'cors';

let todos = [
  {
    id: 3,
    content: 'JS',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'HTML',
    completed: false
  }
];

let name = 'hello1';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.get('/name', (req, res) => {
  res.send(name);
});

app.get('/todos/:id', (req, res) => {
  res.send(todos.filter(todo => todo.id === +req.params.id));
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;

  todos = [req.body, ...todos];
  res.send(todos);
});

app.post('/name', (req, res) => {

  name = req.body.name;
  res.send(name);
});

app.patch('/todos/:id', (req, res) => {
  const id = +req.params.id;
  const completed = req.body;

  todos = todos.map(todo =>
    todo.id === id
      ? {
          ...todo,
          ...completed
        }
      : todo
  );
  res.send(todos);
});

app.patch('/todos', (req, res) => {
  const completed = req.body;

  todos = todos.map(todo => ({
    ...todo,
    ...completed
  }));
  res.send(todos);
});

app.delete('/todos/completed', (req, res) => {
  todos = todos.filter(todo => !todo.completed);
  res.send(todos);
});

app.delete('/todos/:id', (req, res) => {
  const id = +req.params.id;

  todos = todos.filter(todo => todo.id !== id);
  res.send(todos);
});

app.listen('8000', () => {
  console.log('Server is listening on http://localhost:8000');
});
