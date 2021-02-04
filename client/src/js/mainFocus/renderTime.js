export default () => {
  // DOM
  const $clock = document.querySelector('.clock');
  const $greetingTime = document.querySelector('.greeting-time');

  setInterval(() => {
    const today = new Date();

    if (today.getHours() < 12 && today.getMinutes() <= 59) {
      $greetingTime.textContent = ' Morning ';
    } else if (
      today.getHours() >= 12 &&
      today.getHours() < 18 &&
      today.getMinutes() <= 59
    ) {
      $greetingTime.textContent = ' Afternoon ';
    } else if (today.getHours() >= 18) {
      $greetingTime.textContent = ' Evening ';
    }

    $clock.textContent = `${
      today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()
    }:${
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
    }`;
  }, 1000);
};
