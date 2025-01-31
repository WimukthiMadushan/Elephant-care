import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYruG7dn35V3MPj-albSuZ1Gj9D18q7lQ",
  authDomain: "elephant-care.firebaseapp.com",
  projectId: "elephant-care",
  storageBucket: "elephant-care.firebasestorage.app",
  messagingSenderId: "56025208991",
  appId: "1:56025208991:web:b707e06f0074f7e5e1eaaa",
  measurementId: "G-6JK6208WFB"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { auth,  analytics };