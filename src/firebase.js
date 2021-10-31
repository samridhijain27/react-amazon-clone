import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCq8PFyutmag5TJn1JCsiZXavTDg9oj6LI",
    authDomain: "clone-3628b.firebaseapp.com",
    projectId: "clone-3628b",
    storageBucket: "clone-3628b.appspot.com",
    messagingSenderId: "13133422011",
    appId: "1:13133422011:web:d82343ddbf61a8d2af789e",
    measurementId: "G-5FMDP07J7T,
});
const db = firebaseApp.fireStore();
const auth = firebaseApp.auth();

export db, auth;
    

