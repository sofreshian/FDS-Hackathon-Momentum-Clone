import axios from 'axios';
import renderQuote from './renderquote';

const getQuote = async () => {
  try {
    const res = await axios.get('https://goquotes-api.herokuapp.com/api/v1/random?count=30')
    renderQuote(res.data);
  } catch (error) {
    console.log(error);
  }
};

export default getQuote;
