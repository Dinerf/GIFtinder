$(document).ready(function() {
  getGif();
  $('.fa-heart').click(goToFavorites);  
});
let database = firebase.database();
let userID = window.location.search.match(/\?id=(.*)/)[1];


function getGifInfo(event) {
    
  let target = event.target;
  // if('pan right') {
    $(target).removeClass('currentGif').addClass('favorite');    
    saveFavorite(target.id, target.src);   
    
  // } else if('pan left') {
  //   $(target).removeClass('currentGif').addClass('removed');
  // }
  getGif();
}

function error(error) {
  console.log(error);
}

function getGif() {
  const url = 'https://api.giphy.com/v1/gifs/search?q=cat&api_key=VE1DffjUQVOF0sO9GF1BXVfv0rrlMa4A&rating=pg'
  $.ajax({
    type: 'GET',
    url,
    success: showGif,
    error
  });
}

function showGif(data) {
  data.data.map((el) => {
    showNewGif(el.id, el.images.original.url)
  })
}

function showNewGif(gifID, gifURL) {
  $('main').html(`
  <img class="currentGif" id="${gifID}" src="${gifURL}"/>
  `);
  $('.currentGif').click(getGifInfo);
}

function saveFavorite(gifID, gifURL) {
  return database.ref('users/' + userID + '/' + gifID).push({
    gif: gifURL 
  });
}

function goToFavorites() {
  window.location = 'favorites.html?id=' + userID;
}