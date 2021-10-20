import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkBhyov3l6Yct78iIeMbSxqswpNb0yGn4",
  authDomain: "ahmed-19615.firebaseapp.com",
  projectId: "ahmed-19615",
  storageBucket: "ahmed-19615.appspot.com",
  messagingSenderId: "1093527769518",
  appId: "1:1093527769518:web:eecda75234fc586a3a383f",
  measurementId: "G-L12MFVKZ3V"
};


  firebase.initializeApp(firebaseConfig)

  // init firestore
  export const db = firebase.firestore()
  export const storage = firebase.storage();

  