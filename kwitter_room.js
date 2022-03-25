


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
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
      })
      document.getElementById("msg").value="";
}
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="hello dear   "+user_name+" !";
    function addRoom()
{
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    })
    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_Names);
      row="<div class='room_nmae'id="+Room_names+"onclick='redierctToRoomName(this.id)'>#"+Room_names+"</div<hr>";
      document.getElementById("output").innerHTML=row;
      //End code
});});}
getData();
function redierctToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      console.log("logout");
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.alert("!! comform !! please not to get out")
      window.location="index.html";


}

function addRoom(){
      console.log("Room event is generated...")

}
