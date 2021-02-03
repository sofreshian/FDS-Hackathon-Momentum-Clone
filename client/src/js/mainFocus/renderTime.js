export default () => {
  // DOM
  const $clock = document.querySelector('.clock');

  const today = new Date();

  setInterval(() => {
    $clock.textContent = `${today.getHours()}:${today.getMinutes()}`;
  }, 1000);
};
