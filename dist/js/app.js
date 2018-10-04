$(document).ready(function() {
getGif();
});

// let userID = window.location.search.match(/\?id=(.*)/)[1];

// $('.currentGif').pan((event) => {
//   let target = event.target;
//   if('pan right') {
//     $(target).removeClass('currentGif').addClass('favorite');
//     saveFavorite(target.id, target.src);
//   } else if('pan left') {
//     $(target).removeClass('currentGif').addClass('removed');
//   }
//   getGif();
// });

function getGif() {
  // Puxar gif da api
  const url = "https://api.giphy.com/v1/gifs/search?q=cat&api_key=VE1DffjUQVOF0sO9GF1BXVfv0rrlMa4A&rating=pg"

  $.ajax({
    type: "GET",
    url,
    success: showGif,
    error
  })
  
  // let gifID = ;
  // let gifURL = ;
  // showNewGif(gifID, gifURL);
}

function showGif(data) {
  data.data.map((el) => {
    let gifID = el.id;
    let gifURL = el.images.original.url;
    console.log(gifID)
    console.log(gifURL)
    showNewGif(gifID, gifURL)
    // $("main").append(`<p>oi</p>`)
  })
}

function error(error) {
  console.log(error);
}

function showNewGif(gifID, gifURL) {
  $('main').append(`
  <img class="currentGif" id="${gifID}" src="${gifURL}"/>
  `);
}

function saveFavorite(gifID, gifURL) {
  return database.ref('users/' + userID + '/' + gifID).push({
    gif: gifURL
  });
}