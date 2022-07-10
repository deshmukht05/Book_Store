
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAGQLRy6D-QuQ2MYORMrusj3l72O50gDMM",
    authDomain: "tushar-acbae.firebaseapp.com",
    databaseURL: "https://tushar-acbae-default-rtdb.firebaseio.com",
    projectId: "tushar-acbae",
    storageBucket: "tushar-acbae.appspot.com",
    messagingSenderId: "837286673379",
    appId: "1:837286673379:web:90d713dfe75022b4803ed6",
    measurementId: "G-VSW7W1DBZR"
};



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
	
  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Registered Successful");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Login Successful");
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
	  window.location='index.html';
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
     document.getElementById('user').innerHTML = 'Active User: '+email;
    }
    else{
      document.getElementById('user').innerHTML = 'Not Logged In';
    }
  })

 
    //  document.getElementById("user").innerHTML = "Active User "+email;