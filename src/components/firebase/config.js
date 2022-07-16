import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAlEtYbCv5KTyooLskuP93fvY-meT2tV2Q",
    authDomain: "brave-138ad.firebaseapp.com",
    projectId: "brave-138ad",
    storageBucket: "brave-138ad.appspot.com",
    messagingSenderId: "689422473857",
    appId: "1:689422473857:web:afe1adbe2925b532e44b80"
  };

//   init firbase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
 const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }