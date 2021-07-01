import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAZEVX7VjlCjYR6j6tvhV-yXso9Q8Hk1ts',
  authDomain: 'noe-firegram.firebaseapp.com',
  projectId: 'noe-firegram',
  storageBucket: 'noe-firegram.appspot.com',
  messagingSenderId: '226049926692',
  appId: '1:226049926692:web:b5cc27c6ccc6787ed8dab1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
