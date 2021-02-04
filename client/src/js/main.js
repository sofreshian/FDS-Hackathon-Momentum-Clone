import background from './background/background';
import weather from './weather/weather';
import allTodos from './subTodos/todo';
import mainFocus from './mainFocus/mainFocus';
import name from './name/name';
import quote from './quote/quote';

window.onload = () => {
  allTodos();
  weather();
  name();
  mainFocus();
  background();
  quote();
};
