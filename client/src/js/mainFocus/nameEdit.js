export default () => {
  // DOM
  const $userNameInput = document.querySelector('.greeting-username-input');
  const $userName = document.querySelector('.greeting-username');
  const $editBtn = document.querySelector('.greeting-edit-btn');

  $userNameInput.addEventListener('keyup', e => {
    if (e.key !== 'Enter') {
      $userNameInput.setAttribute('size', $userNameInput.value.length);
      if (!$userNameInput.value.length) {
        $userNameInput.setAttribute('size', 1);
      }
      return;
    }

    $userNameInput.classList.remove('is-active');
    $userName.classList.add('is-active');
    $editBtn.classList.add('is-active');
    $userName.textContent = $userNameInput.value;
  });

  $editBtn.addEventListener('click', () => {
    $userNameInput.classList.add('is-active');
    $userName.classList.remove('is-active');
    $editBtn.classList.remove('is-active');
  });
};
