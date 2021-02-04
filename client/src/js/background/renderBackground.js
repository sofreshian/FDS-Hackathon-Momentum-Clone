const renderImage = data => {
  const $body = document.querySelector('body');
  const $photographer = document.querySelector('.background-info-photographer');
  const $location = document.querySelector('.background-info-location');

  $body.style.backgroundImage = `url(${data.urls.regular})`;
  $body.style.backgroundRepeat = 'no-repeat';
  $body.style.backgroundSize = 'cover';

  $photographer.textContent = data.user.name;
  $location.textContent = data.user.location;
};

export default renderImage;
