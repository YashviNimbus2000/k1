const firebaseConfig = {
      apiKey: "AIzaSyCFUTqBR13kWPX8OnrHX5MF4SnquvKmEmM",
      authDomain: "c-96-3488b.firebaseapp.com",
      databaseURL: "https://c-96-3488b-default-rtdb.firebaseio.com",
      projectId: "c-96-3488b",
      storageBucket: "c-96-3488b.appspot.com",
      messagingSenderId: "857373123068",
      appId: "1:857373123068:web:41218ade778718f438d279"
    };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

    
     user_name= localStorage.getItem("user_name");
     room_name= localStorage.getItem("room_name");

     function send()
     {
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
           });

           document.getElementById("msg").value="";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
