import weather from './weather/weather';
import allTodos from './subTodos/todo';
import mainFocus from './mainFocus/mainFocus';

window.onload = () => {
  allTodos();
  weather();
  mainFocus();
};
