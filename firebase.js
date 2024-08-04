// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8EBvAKEtOo0CqWpcq1FPFFYHmji33v58",
  authDomain: "inventory-management-app-4ad3d.firebaseapp.com",
  projectId: "inventory-management-app-4ad3d",
  storageBucket: "inventory-management-app-4ad3d.appspot.com",
  messagingSenderId: "988871786343",
  appId: "1:988871786343:web:7e6964f1ad4ed0dec179c2",
  measurementId: "G-7ZQYP3YZKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);y