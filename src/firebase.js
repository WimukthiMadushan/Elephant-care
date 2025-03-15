import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child, onValue, push } from "firebase/database";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCh01aWLQ8RlxrP1JRqEV8buoCK3ux6Gm4",
  authDomain: "elephant-care-e17df.firebaseapp.com",
  databaseURL: "https://elephant-care-e17df-default-rtdb.firebaseio.com",
  projectId: "elephant-care-e17df",
  storageBucket: "elephant-care-e17df.firebasestorage.app",
  messagingSenderId: "928898899621",
  appId: "1:928898899621:web:867b21427e439ff9c6f74c",
  measurementId: "G-DVLNQEH01E"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);
const database = getDatabase(firebaseApp);
const db = getFirestore(firebaseApp)

export { auth, analytics, ref, set, get, child, onValue, database, push, db };