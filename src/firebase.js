
  import firebase from "firebase/app";
  import "firebase/performance";
  import "firebase/firestore";
  import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCO54Edq9YeZGjnCPLSsyjRax4dwVRYsNE",
    authDomain: "restaurant-677f9.firebaseapp.com",
    projectId: "restaurant-677f9",
    storageBucket: "restaurant-677f9.appspot.com",
    messagingSenderId: "559819570482",
    appId: "1:559819570482:web:550878e7003f83da62eb2b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
  export const auth = firebase.auth();
  export default firebase;
