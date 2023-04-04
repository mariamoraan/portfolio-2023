import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzIZO6_pTgZyCitXjvxyun8aPZmQSSK0c",
    authDomain: "portfolio-2023-3ce65.firebaseapp.com",
    projectId: "portfolio-2023-3ce65",
    storageBucket: "portfolio-2023-3ce65.appspot.com",
    messagingSenderId: "61368892460",
    appId: "1:61368892460:web:f6927c5d01ab7a8df8a589",
    measurementId: "G-W06ELMWSSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firebaseAuthProvider = getAuth(app);


