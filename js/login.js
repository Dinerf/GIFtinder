// BANCO DE DADOS
const database = firebase.database();
const USER_ID = localStorage.getItem("userKey");

// if (USER_ID) {
//   window.location = "screen1.html";
// }

$(document).ready(function() {
  $("#sign-in-button").click(clickSignIn);
  $("#sign-up-button").click(clickSignUp);
  // splash();
});

// TELA SPLASH
function splash() {
  $(".splash").delay(3000).fadeOut('slow');
  $(".initial-page").hide();
  $(".initial-page").delay(3000).fadeIn('slow');
}

// ENTRAR
function clickSignIn(event) {
  event.preventDefault();
  const email = $("#sign-in-email").val();
  const password = $("#sign-in-password").val();
  signIn(email, password);
}

function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      const userID = response.user.uid;
      sendIdToLocalStorage(userID);
      window.location = "main.html";
    })
    .catch((error) => {
      handleErrors(error);
    });
}

// CADASTRAR
function clickSignUp(event) {
  event.preventDefault();
  const name = $("#sign-up-name").val();
  const email = $("#sign-up-email").val();
  const password = $("#sign-up-password").val();
  signUp(name, email, password)
};

function signUp(name, email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const userID = response.user.uid;

      database.ref("/users/" + userID).set({
        name: name
      });

      sendIdToLocalStorage(userID);
      window.location = "main.html";
    })
    .catch((error) => {
      handleErrors(error);
    });
}

// ERROS
function handleErrors(error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage);
}

// ENVIAR CHAVE
function sendIdToLocalStorage(key) {
  localStorage.setItem("userKey", key);
}