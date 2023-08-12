// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1HoP1UtSYS9ySMH8WnZCcyXscKrh8Wok",
  authDomain: "fir-login-tutorial-f9f62.firebaseapp.com",
  projectId: "fir-login-tutorial-f9f62",
  storageBucket: "fir-login-tutorial-f9f62.appspot.com",
  messagingSenderId: "294747670742",
  appId: "1:294747670742:web:dc64a3262210c640b96177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider}