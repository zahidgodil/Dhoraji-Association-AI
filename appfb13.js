function createUser() {
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;





    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        .then(() => {
            console.log('user created');
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
}