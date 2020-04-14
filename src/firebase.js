import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");
require("firebase/storage");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-DfB8jEwgKbykc8jfDnf9PRGWOUpBKXg",
  authDomain: "pawagreen.firebaseapp.com",
  databaseURL: "https://pawagreen.firebaseio.com",
  projectId: "pawagreen",
  storageBucket: "pawagreen.appspot.com",
  messagingSenderId: "311603593837",
  appId: "1:311603593837:web:56b566d84926c964793564",
  measurementId: "G-5XTF9XMKQ8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
