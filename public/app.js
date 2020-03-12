document.addEventListener("DOMContentLoader", event => {
    const app = firebase.app();
    console.log(app);
})

function signUp(){
        
    const userEmail = document.getElementById("email_field").value;
    const userPass = document.getElementById("password_field").value;
    
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .then(function(){
        window.alert("SignUp!!");
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    })
}


function login(){
  
    const userEmail = document.getElementById("email_field").value;
    const userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then(function(){
        document.location.href = "main.html";
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
}
  

function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            var user = result.user;
            //document.write('Hello '+user.displayName);
            console.log(user)

            document.location.href = "timer-page.html";

        })
        .catch(console.log)
}

function facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            var token = result.credential.accessToken;
            var user = result.user;
            //document.write('Hello '+user.displayName);
            console.log(user)
            document.location.href = "main.html";
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
}
  