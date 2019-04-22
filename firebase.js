
const firebase=require('firebase')


//COPY PASTE CONGIF OBJECT FROM FIREBASE CONSOLE
var config = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET"
    messagingSenderId: "MESSAGING_SENDER_ID"
  };
  firebase.initializeApp(config);

//CREATE DATABASE REFERENCE VARIABLE
const database=firebase.database();

//POINT TO USERS NODE
const usersRef=database.ref('/users');

// set-Writes or replace data to a defined path
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


//UPDATE DATA TO A SPECIFIED PATH
const user1Ref = usersRef.child("user1");
user1Ref.update({
  "username": "dylan"
},);

// push() function  generates a unique key for each new child. 
usersRef.push().set({

    username:'Daniel',
    email:'daniel@gmail.com'
})

//READ DATA FROM A SPECIFIC PATH
usersRef.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  
  usersRef.once("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  })
  
//REMOVE A RECORD

usersRef.child("user1").remove();

// ADD CURRENT TIMESTAMP TO RECORD
usersRef.push({ startedAt: firebase.database.ServerValue.TIMESTAMP });
