// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8EBvAKEtOo0CqWpcq1FPFFYHmji33v58",
    authDomain: "inventory-management-app-4ad3d.firebaseapp.com",
    databaseURL: "https://inventory-management-app-4ad3d-default-rtdb.firebaseio.com",
    projectId: "inventory-management-app-4ad3d",
    storageBucket: "inventory-management-app-4ad3d.appspot.com",
    messagingSenderId: "988871786343",
    appId: "1:988871786343:web:78644fdd25b96798c179c2",
    measurementId: "G-95Z74FY83E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);
export { firestore };
