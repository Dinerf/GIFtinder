$(document).ready(function() {
  getFavorites();
});

let database = firebase.database();
let userID = window.location.search.match(/\?id=(.*)/)[1];

function getFavorites() {
  database.ref('users/' + userID).once('value')
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      gifID = childSnapshot.key;
      database.ref('users/' + userID + '/' + gifID).once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key;
        })
        database.ref('users/' + userID + '/' + gifID + '/' + childKey).once('value')
        .then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
          gifURL = childSnapshot.val();
          showFavorites(gifURL, gifID);                 
        });
      });
      });
      });
  });

  



  // For each favorite executa função abaixo

  // showFavorites(gifURL, gifID);
}

function showFavorites(gifURL, gifID) {
  $('#allFavorites').append(`
  <img class="favorite" id="${gifID}" src="${gifURL}"/>
  `);
  // Abaixo, ao clicar, o gif aumenta e toma o tamanho da tela.
  $(gifID).click();
}