import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: XX,
    authDomain: "clone-3628b.firebaseapp.com",
    projectId: "clone-3628b",
    storageBucket: "clone-3628b.appspot.com",
    messagingSenderId: XX,
    appId: XX,
    measurementId: "G-5FMDP07J7T,
});
const db = firebaseApp.fireStore();
const auth = firebaseApp.auth();

export db, auth;
    

