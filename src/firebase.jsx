import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAx1o9SKekXVmATELdTEb0oyo6Mo0Xw89E",
  authDomain: "vezir-twitter-clone.firebaseapp.com",
  projectId: "vezir-twitter-clone",
  storageBucket: "vezir-twitter-clone.appspot.com",
  messagingSenderId: "853981563133",
  appId: "1:853981563133:web:bbd68a9d31afe7e326d694",
  measurementId: "G-T2Q7Q0JW9D"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;