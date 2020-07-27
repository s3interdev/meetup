import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// The web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDLWxWbAupXzHB2eRVqLA-qe2LjFY-r_S8',
  authDomain: 's3-meetup-tukutane.firebaseapp.com',
  databaseURL: 'https://s3-meetup-tukutane.firebaseio.com',
  projectId: 's3-meetup-tukutane',
  storageBucket: 's3-meetup-tukutane.appspot.com',
  messagingSenderId: '825998580525',
  appId: '1:825998580525:web:f9fd12869d662b520a91a4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Utilities
const auth = firebase.auth();
const db = firebase.firestore();
const strg = firebase.storage();

// Export utilities
export { auth, db, strg };
