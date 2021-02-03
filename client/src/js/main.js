import weather from './weather/weather';
import allTodos from './subTodos/todo';
import mainFocus from './mainFocus/mainFocus';
import name from './name/name';

window.onload = () => {
  allTodos();
  weather();
  name();
  mainFocus();
};
