import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyD3-jyPj-otZI8mXWr9tMYXMbDw7u3guqc",
    authDomain: "wily-2.firebaseapp.com",
    databaseURL: "https://wily-2.firebaseio.com",
    projectId: "wily-2",
    storageBucket: "wily-2.appspot.com",
    messagingSenderId: "225272730344",
    appId: "1:225272730344:web:5b3b06aa71cec70f79af5d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
  