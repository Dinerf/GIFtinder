window.onload = getGif();

let userID = window.location.search.match(/\?id=(.*)/)[1];

$('.currentGif').pan((event) => {
  let target = event.target;
  if('pan right') {
    $(target).removeClass('currentGif').addClass('favorite');
    saveFavorite(target.id, target.src);
  } else if('pan left') {
    $(target).removeClass('currentGif').addClass('removed');
  }
  getGif();
});

function getGif() {
  // Puxar gif da api

  let gifID = ;
  let gifURL = ;
  showNewGif(gifID, gifURL);
}

function showNewGif(gifID, gifURL) {
  $('#showGIF').append(`
  <video class="currentGif" id="${gifID}" src="${gifURL}"></video>
  `);
}

function saveFavorite(gifID, gifURL) {
  return database.ref('users/' + userID + '/' + gifID).push({
    gif: gifURL
  });
}