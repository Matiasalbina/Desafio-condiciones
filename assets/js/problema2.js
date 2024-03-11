const stickerInputs = document.querySelectorAll('.problema2 input');
const calculateButton = document.getElementById('calculate');
const stickerResult = document.getElementById('stickerResult');

calculateButton.addEventListener('click', () => {
  let totalStickers = 0;
  stickerInputs.forEach(input => {
    const value = parseInt(input.value, 10) || 0;
    totalStickers += value;
  });

  if (totalStickers <= 10) {
    stickerResult.textContent = `Llevas ${totalStickers} stickers`;
  } else {
    stickerResult.textContent = "Llevas demasiados stickers";
  }
})