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
  room_name = localStorage.getItem("room_name");
  function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
naame:room_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
 }
