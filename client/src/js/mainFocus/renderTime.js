export default () => {
  // DOM
  const $clock = document.querySelector('.clock');

  setInterval(() => {
    const today = new Date();

    $clock.textContent = `${today.getHours()}:${today.getMinutes()}`;
  }, 1000);
};
