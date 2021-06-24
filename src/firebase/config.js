import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbqYTijxfEWEy52I1DeJ8kqnRiGGpFk60",
    authDomain: "firegram-ce285.firebaseapp.com",
    projectId: "firegram-ce285",
    storageBucket: "firegram-ce285.appspot.com",
    messagingSenderId: "1069046513730",
    appId: "1:1069046513730:web:07f0eaa5fbe523b6fe2ddb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };