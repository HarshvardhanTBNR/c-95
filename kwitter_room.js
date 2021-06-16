
var firebaseConfig = {
      apiKey: "AIzaSyAvXary31fDtInfYVojStXEr_aZnUe8-w0",
      authDomain: "kwitter-944d2.firebaseapp.com",
      databaseURL: "https://kwitter-944d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-944d2",
      storageBucket: "kwitter-944d2.appspot.com",
      messagingSenderId: "251806787075",
      appId: "1:251806787075:web:aa0412ef25ec6a7a92d036",
      measurementId: "G-ZDWMW0TJJ1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome : " +user_name;

function addRoom(){
add_room=document.getElementById("room_name").value;
firebase.database().ref("/").child(add_room).update({
purpose : "adding room name"
});
localStorage.setItem("roomname" , add_room);

window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name = " + Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("roomname" , name);
window.location="kwitter_page.html";
}

