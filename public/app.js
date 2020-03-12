document.addEventListener("DOMContentLoader", event => {
    const app = firebase.app();
    console.log(app);
})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.write('Hello '+user.displayName);
            console.log(user)
            document.location.href = "timer-page.html";
        })
        .catch(console.log)
}