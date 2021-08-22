import firebase from "firebase";
import "firebase/firestore"
// step 1
import "firebase/auth"
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyD9yzidMAtfDdDHXAlErBmL2PDNdivzYvQ",
  authDomain: "react-reels-5eaf2.firebaseapp.com",
  projectId: "react-reels-5eaf2",
  storageBucket: "react-reels-5eaf2.appspot.com",
  messagingSenderId: "26027653970",
  appId: "1:26027653970:web:3bc84e1a0edf0f8784d88b"
};
 
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// step 2
export const auth = firebase.auth()
export const storage = firebase.storage();
//Step 3=> firebase console; enable google login in auth panel

//Step 4
let googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = ()=> auth.signInWithPopup(googleAuthProvider);
export default firebase