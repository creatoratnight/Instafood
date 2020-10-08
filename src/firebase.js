import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA7voPyzn5qX12b9pM-fZhTm3qWvy6vYe8",
  authDomain: "instafood-8d0e6.firebaseapp.com",
  databaseURL: "https://instafood-8d0e6.firebaseio.com",
  projectId: "instafood-8d0e6",
  storageBucket: "instafood-8d0e6.appspot.com",
  messagingSenderId: "793552569179",
  appId: "1:793552569179:web:67411f116206c7ce97d07e",
  measurementId: "G-L714JC25N0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
