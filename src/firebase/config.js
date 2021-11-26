import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTI7kFBsCC9X_04pDE-S39cbXiLP8YVyA",
  authDomain: "mymoneytracker-fc9c6.firebaseapp.com",
  projectId: "mymoneytracker-fc9c6",
  storageBucket: "mymoneytracker-fc9c6.appspot.com",
  messagingSenderId: "480224859996",
  appId: "1:480224859996:web:b12e9c10720baf2ac21399",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
