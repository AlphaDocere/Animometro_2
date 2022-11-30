// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDvCRwDmhxrPmeYXXnvDk6HHT3umPoB16g",
  authDomain: "login-test-fa2c7.firebaseapp.com",
  projectId: "login-test-fa2c7",
  storageBucket: "login-test-fa2c7.appspot.com",
  messagingSenderId: "616731285554",
  appId: "1:616731285554:web:c734bc7ffefc543f38042b",
  measurementId: "G-FSM8V099XS"
};


// Initialize Firebase  

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

