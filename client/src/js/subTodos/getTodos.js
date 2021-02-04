import axios from 'axios';
import render from './render';

const getTodos = async () => {
  try {
    const res = await axios.get('http://localhost:8000/todos');
    render(res.data);
  } catch (err) {
    console.error(err);
  }
};

export default getTodos;
