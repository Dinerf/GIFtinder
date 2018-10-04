window.onload = newGif;

$('.currentGif').swipe((event) => {

  let target = event.target;
  
  if(swipe right) {
    $(target).removeClass('currentGif').addClass('favorite');
    favorite();
  } else if (swipe left) {
    $(target).removeClass('currentGif').addClass('removed');
  }

  newGif();
});

function newGif() {
  // Puxar gif da api, acrescentar classe 'currentGif' e mostrar na tela
}

function favorite() {
  // Salvar o arquivo no storage
}