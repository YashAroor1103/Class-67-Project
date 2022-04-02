import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0pUjYLrOXwpOiTNSL50AOPFebomBg_M0",
    authDomain: "team-voting-c67-b94c6.firebaseapp.com",
    projectId: "team-voting-c67-b94c6",
    storageBucket: "team-voting-c67-b94c6.appspot.com",
    messagingSenderId: "457023663075",
    appId: "1:457023663075:web:d9ca47ab5a109af3a38ed6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default firebase.database();