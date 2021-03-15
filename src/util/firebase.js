import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA9CoOEoFUNB4tbbclgDRAsBXFa1srNbVQ",
    authDomain: "sysu-texas.firebaseapp.com",
    projectId: "sysu-texas",
    storageBucket: "sysu-texas.appspot.com",
    messagingSenderId: "57177585029",
    appId: "1:57177585029:web:c2db47f89404d2733040ec",
    measurementId: "G-V25MRD6B8M"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;