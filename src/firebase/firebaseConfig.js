import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyC0wBJ0p4NvE5LMPkPUXK90LiQzCKNZ01s',
    authDomain: 'journal-app-1cdca.firebaseapp.com',
    projectId: 'journal-app-1cdca',
    storageBucket: 'journal-app-1cdca.appspot.com',
    messagingSenderId: '522073581288',
    appId: '1:522073581288:web:f2176b42cc14a8752c4b5d',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { db, googleAuthProvider, firebase };