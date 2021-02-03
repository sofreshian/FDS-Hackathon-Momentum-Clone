export default name => {
  // DOM
  const $userNameInput = document.querySelector('.greeting-username-input');
  const $userName = document.querySelector('.greeting-username');
  const $editBtn = document.querySelector('.greeting-edit-btn');

  $userNameInput.classList.remove('is-active');
  $userName.classList.add('is-active');
  $editBtn.classList.add('is-active');
  $userName.textContent = name;

  $editBtn.addEventListener('click', () => {
    $userNameInput.classList.add('is-active');
    $userName.classList.remove('is-active');
    $editBtn.classList.remove('is-active');
  });
};
