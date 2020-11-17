import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApnuWUnm-frKY2bTwpd9nJXnNSOymbKQA",
  authDomain: "vinder-1.firebaseapp.com",
  databaseURL: "https://vinder-1.firebaseio.com",
  projectId: "vinder-1",
  storageBucket: "vinder-1.appspot.com",
  messagingSenderId: "745717910230",
  appId: "1:745717910230:web:ae68c31dc9f069d724d777",
  measurementId: "G-SHTVTJQMH0",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
