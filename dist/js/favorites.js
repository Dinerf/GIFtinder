window.onload = getFavorites();

function getFavorites() {
  // Pega favoritos do storage
  // For each favorite executa função abaixo

  showFavorites(gifURL, gifID);
}

function showFavorites(gifURL, gifID) {
  // Exibe na favoritos;

  $('#allFavorites').append(`
  <video class="favorite" id="${gifID}" src="${gifURL}"></>
  `);

  // Abaixo, ao clicar, o gif aumenta e toma o tamanho da tela.
  $(gifID).click();
}