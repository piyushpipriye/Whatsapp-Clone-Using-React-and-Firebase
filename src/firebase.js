import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "whatsapp-b05fa.firebaseapp.com",
  projectId: "whatsapp-b05fa",
  storageBucket: "whatsapp-b05fa.appspot.com",
  messagingSenderId: "108560375478",
  appId: "1:108560375478:web:71f97bafe5cdd845cc9017",
  measurementId: "G-TECNT8QZYD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
