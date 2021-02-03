import axios from 'axios';
import nameEdit from './nameEdit';

const fetchName = async () => {
  const res = await axios.get('http://localhost:8000/name');
  nameEdit(res.data);
};

export default fetchName;
