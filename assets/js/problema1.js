const imageToggle = document.getElementById('imageToggle');

imageToggle.addEventListener('click', () => {
  if (imageToggle.style.border) {
    imageToggle.style.border = '';
  } else {
    imageToggle.style.border = '2px solid red';
  }
})