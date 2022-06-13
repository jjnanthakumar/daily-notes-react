import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCaobt-jU5Wab2G2kEjc4a2jdycsqqIl_8",
    authDomain: "daily-notes-6473b.firebaseapp.com",
    projectId: "daily-notes-6473b",
    storageBucket: "daily-notes-6473b.appspot.com",
    messagingSenderId: "256938932466",
    appId: "1:256938932466:web:a78db84a6c43b668db786b",
    measurementId: "G-1D60D0YCXY"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }