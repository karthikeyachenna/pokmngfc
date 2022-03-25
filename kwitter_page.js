const firebaseConfig = {
      apiKey: "AIzaSyA0ARlzUON3e0MUwd-AT-WqGbfCYihJKKo",
      authDomain: "cresk-9d69f.firebaseapp.com",
      databaseURL: "https://cresk-9d69f-default-rtdb.firebaseio.com",
      projectId: "cresk-9d69f",
      storageBucket: "cresk-9d69f.appspot.com",
      messagingSenderId: "389559884951",
      appId: "1:389559884951:web:561093af645ca597acddd2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>;"
like_button="<button class='btn btn=warning'id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumds-up'>like:"+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(messageid)
{
      console.log("cilcked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });




}
function logout()
{
     
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.alert("!! comform !! please not to get out")
      window.location="index.html";


}