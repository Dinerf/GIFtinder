$(document).ready(function() {
  getFavorites();
});

let database = firebase.database();
let USER_ID = window.location.search.match(/\?id=(.*)/)[1];

function getFavorites() {
  var name;

  database.ref('users/' + USER_ID).once('value')
  .then(function(snapshot) {
    
    
    name = snapshot.val();
    console.log(name);
  })

  
  // For each favorite executa função abaixo

  showFavorites(gifURL, gifID);
}

function showFavorites(gifURL, gifID) {
  $('#allFavorites').append(`
  <video class="favorite" id="${gifID}" src="${gifURL}"></>
  `);
  // Abaixo, ao clicar, o gif aumenta e toma o tamanho da tela.
  $(gifID).click();
}