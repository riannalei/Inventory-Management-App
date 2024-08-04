// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8EBvAKEtOo0CqWpcq1FPFFYHmji33v58",
    authDomain: "inventory-management-app-4ad3d.firebaseapp.com",
    projectId: "inventory-management-app-4ad3d",
    storageBucket: "inventory-management-app-4ad3d.appspot.com",
    messagingSenderId: "988871786343",
    appId: "1:988871786343:web:78644fdd25b96798c179c2",
    measurementId: "G-95Z74FY83E"
  };
  
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
