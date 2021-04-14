import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYUzQA4C2rMQrZTtHWiE6IEgYM9OCq2Wk",
  authDomain: "netflix-clone-68c04.firebaseapp.com",
  projectId: "netflix-clone-68c04",
  storageBucket: "netflix-clone-68c04.appspot.com",
  messagingSenderId: "863808016075",
  appId: "1:863808016075:web:79f985c3fd25df20ae154e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
