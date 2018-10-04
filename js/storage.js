// HTML
{/* <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-storage.js"></script> */}

// metodo de upload será a lib HAMMER
const PROFILE_ID = window.location.search.match(/profile_id=(.*)/)[1];

const storage = firebase.storage();
let storageRef = storage.ref()
// mandando pro lado direito
$("#fileButton").change((e)=> {
  // pegar o arquivo, o primeiro dos arquivos, vamos ter que fazer map pra pegar todos que forem add?
  let fileName = (new Date().getTime()) + '-' + file.name;
  let file = e.target.files[0];

	// criar um referencia no storage
  // let storageRef = storage.ref(user + "/favorites_gifs/" + file.name);
  let storageGif = storageRef.child(PROFILE_ID + "/favorites_gif/" + fileName)

  // a referencia sera usada para uploader do arquivo
  return storageGif.put(file).then(( => storageGif.getDownloadURL()));

});


// function uploadImage(file) {
//   var fileName = (new Date().getTime()) + '-' + file.name;
//   var imageRef = firebase.storage().ref().child(PROFILE_ID + "/" + fileName);
//   return imageRef.put(file).then(() => imageRef.getDownloadURL());
// }

// async function buttonClick() {

//   // verifica se existe arquivo
//   var file = $('#file-input').prop('files')[0];
//   var imageURL = '';

//   if (file !== undefined) {
//     imageURL = await uploadImage(file);
//   }

//   var postContent = $('#post-content').val();
//   $('#post-content').val('');

//   var permission = $('#radio-filter:checked').val();

//   var post = {
//     content: postContent,
//     image: imageURL,
//     likes: 0,
//     canView: permission
//   }

//   var postsFromDB = addPostToDB(postContent, imageURL, permission);

//   createPost(post, postsFromDB.key);
// }