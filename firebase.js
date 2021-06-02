import firebase from "firebase/app";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCcyZorAKkIqtDKcZDMwDRziWTgYe4Bsog",
    authDomain: "kinfork-d24c7.firebaseapp.com",
    databaseURL: "https://kinfork-d24c7-default-rtdb.firebaseio.com",
    projectId: "kinfork-d24c7",
    storageBucket: "kinfork-d24c7.appspot.com",
    messagingSenderId: "995302041840",
    appId: "1:995302041840:web:c1d6619222a9da69357a35"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();