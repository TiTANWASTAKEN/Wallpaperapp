var firebaseConfig = {
    apiKey: "AIzaSyB4FrzMp00_D37IY75FmagbtI5w8lj3LkY",
    authDomain: "wallpaper-756d9.firebaseapp.com",
    databaseURL: "https://wallpaper-756d9.firebaseio.com",
    projectId: "wallpaper-756d9",
    storageBucket: "wallpaper-756d9.appspot.com",
    messagingSenderId: "511921964070",
    appId: "1:511921964070:web:a548ddede044be194652e7",
    measurementId: "G-GPJGLKFF8J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function(){
    var email=$("#email").val();
    var password=$("#password").val();

    var result=firebase.auth().signInWithEmailPassword(email, password);
    result.catch(function(error){
      var errorCode=error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(error.Message);
    });
  });