import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyAp8KLOkrgq9vQTwo14APqdlX8ebksXmDg",
    authDomain: "picture-randomizer.firebaseapp.com",
    projectId: "picture-randomizer",
    storageBucket: "picture-randomizer.appspot.com",
    messagingSenderId: "372056885857",
    appId: "1:372056885857:web:125cb7a86191151b5e3820"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;