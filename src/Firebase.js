import * as firebase from 'firebase'
import '@firebase/firestore';


const config = {
    apiKey: "AIzaSyBxlWtA-EKiYrnTJ7gBR_h8XEH9fOVP22s",
    authDomain: "app-react-8a2e4.firebaseapp.com",
    databaseURL: "https://app-react-8a2e4.firebaseio.com",
    projectId: "app-react-8a2e4",
    storageBucket: "app-react-8a2e4.appspot.com",
    messagingSenderId: "554637449295",
    appId: "1:554637449295:web:94b43fe45d6fc3a4c6b23a",
    measurementId: "G-TW5T82BRHD"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export const db = firebase.firestore()