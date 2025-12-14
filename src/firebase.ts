import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "",

    authDomain: "crayonsmp.firebaseapp.com",

    projectId: "crayonsmp",

    storageBucket: "crayonsmp.firebasestorage.app",

    messagingSenderId: "",

    appId: "",

    measurementId: ""

};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
