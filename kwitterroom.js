var firebaseConfig = {
  apiKey: "AIzaSyAz_MphZq8F_eT_do5-Lz41JiqWbNkjmwM",
  authDomain: "kwitter-7aee0.firebaseapp.com",
  databaseURL: "https://kwitter-7aee0-default-rtdb.firebaseio.com",
  projectId: "kwitter-7aee0",
  storageBucket: "kwitter-7aee0.appspot.com",
  messagingSenderId: "224912871756",
  appId: "1:224912871756:web:184383266a7a8a6dbbbfe9"
};

firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwittermessage.html";
  }
  //--------------------------------------------------------------------------
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "loginpage.html";
  }
 function redirectToRoomName(name){
console.log(name);
localStorage.setItem(name);
window.location = "kwittermessage.html";
 }
 