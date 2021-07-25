import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyB6Qh1YBwMXmMncAl71iDHu9_w5Kq7dp8A",
     authDomain: "home-chef-fabf5.firebaseapp.com",
     projectId: "home-chef-fabf5",
     storageBucket: "home-chef-fabf5.appspot.com",
     messagingSenderId: "629927806355",
     appId: "1:629927806355:web:ad329823c0e36014ed5466",
     measurementId: "G-C4Q56Q8TX4"
   };

   
          const firebaseApp = firebase.initializeApp(firebaseConfig);

          const db = firebaseApp.firestore();
          const auth = firebase.auth();


          export {db, auth};