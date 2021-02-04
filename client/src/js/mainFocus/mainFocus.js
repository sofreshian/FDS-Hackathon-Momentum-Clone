import renderTime from './renderTime';
import fetchMainFocus from './fetchMainFocus';
import addMainFocus from './addMainFocus';
import toggleMainFocus from './toggleMainFocus';
import deleteMainFocus from './deleteMainFocus';

export default () => {
  renderTime();
  fetchMainFocus();
  addMainFocus();
  toggleMainFocus();
  deleteMainFocus();
};
