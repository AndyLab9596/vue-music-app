import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_K4NLLCXrD41xWsdtqLeOK7km94MjF28",
  authDomain: "vue2-music.firebaseapp.com",
  projectId: "vue2-music",
  storageBucket: "vue2-music.appspot.com",
  appId: "1:224430415551:web:f169ac1364ff1397a7f00a",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");

export { auth, db, usersCollection, storage };
