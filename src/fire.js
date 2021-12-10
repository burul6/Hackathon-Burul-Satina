import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDMBY8thDtosqM1KLSxvNhauZqN20rDcts",
    authDomain: "team-hacathon.firebaseapp.com",
    projectId: "team-hacathon",
    storageBucket: "team-hacathon.appspot.com",
    messagingSenderId: "951191121743",
    appId: "1:951191121743:web:186fb5a45e1988d96e5f3a"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;  