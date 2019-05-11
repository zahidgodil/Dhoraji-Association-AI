// function createUser() {
//     var userEmail = document.getElementById('email').value;
//     var userPassword = document.getElementById('password').value;
    





//     firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
//         .then(() => {
//             console.log('user created');
//         })
//         .catch(function (error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ...
//         });
// }



function createUser() {
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;




    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        .then((user) => {
            console.log('user created');
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
}



function saveUserDetails(email, phone, dob, uid){
    console.log(email, phone, dob, uid)
    firebase.firestore().collection('users').doc(uid).set({
        userEmail: email,
        userPhone: phone, 
        dob: dob,
        userUid: uid
    })

        .then(function (docRef){
            console.log("Document written with ID:",docRef.id);
        })
        .catch(function(error){
            console.log("Error adding document", error);
        });



}


