import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getAuth } from 'firebase/auth'; // Import Auth if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaQmCMW8_TSTvoQipiFq4Hi2zrBJkAbyk",
  authDomain: "rnform-43947.firebaseapp.com",
  projectId: "rnform-43947",
  storageBucket: "rnform-43947.appspot.com",
  messagingSenderId: "690599206062",
  appId: "1:690599206062:web:66174acd77c3d6d8ba613f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Auth instance (if needed)

export { db, auth }; // Export Firestore and Auth instances for use in your app
