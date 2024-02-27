import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAF9OljgZnMQpqIhcFdpZ0AlSAT0kIx8o",
  authDomain: "saltair-27de9.firebaseapp.com",
  projectId: "saltair-27de9",
  storageBucket: "saltair-27de9.appspot.com",
  messagingSenderId: "686085490688",
  appId: "1:686085490688:web:517ed927de466dba6b70e5",
  measurementId: "G-F71NR662X7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
