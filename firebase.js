
const firebase=require('firebase')
//Config file



var config = {
    apiKey: "AIzaSyC75pTZQplqXcycft-4hLiiaE8ck_Jk3lU",
    authDomain: "robocraze-ac834.firebaseapp.com",
    databaseURL: "https://robocraze-ac834.firebaseio.com",
    projectId: "robocraze-ac834",
    storageBucket: "robocraze-ac834.appspot.com",
    messagingSenderId: "580150101989"
  };
  firebase.initializeApp(config);

  
  
  const database=firebase.database();
//   const usersRef=database.ref('/users');


  //set-Writes or replace data to a defined path

  database.ref('users/').set({
      user1:{
    username:'Mel',
    email:'melgo@gmail.com',
  }},
    function(error) {
        if (error) {
          console.log("Data could not be saved." + error);
        } else {
          console.log("Data saved successfully.");
        }
    
})




// const user1Ref = usersRef.child("user1");
// user1Ref.update({
//   "username": "dylan"
// },);





// // push() function  generates a unique key for each new child. 

// usersRef.push().set({

//     username:'Daniel',
//     email:'daniel@gmail.com'

// })










// usersRef.on("value", function(snapshot) {
//     console.log(snapshot.val());
//   }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   });
  
//   usersRef.once("value", function(snapshot) {
//     console.log(snapshot.val());
//   }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   })
  
  








const usersRef=database.ref('/users');

usersRef.child("user1").remove();




















  // //add timestamp


//   usersRef.push({ startedAt: firebase.database.ServerValue.TIMESTAMP });
