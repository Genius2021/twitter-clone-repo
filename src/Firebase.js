import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3BQ2tOpsUZ2MYzLscx2wFElUmLQIrD90",
  authDomain: "twitter-clone-c9ab5.firebaseapp.com",
  projectId: "twitter-clone-c9ab5",
  storageBucket: "twitter-clone-c9ab5.appspot.com",
  messagingSenderId: "747447473729",
  appId: "1:747447473729:web:8f1124cb5a63e64079d8c0",
  measurementId: "G-E80P84LD2Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;