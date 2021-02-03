import axios from 'axios';
import renderMainFocus from './renderMainFocus';

const fetchMainFocus = async () => {
  const res = await axios.get('http://localhost:8000/focus');
  renderMainFocus(res.data);
};

export default fetchMainFocus;
