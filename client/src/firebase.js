import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBHLt1OE35JW85QziDuBGeH5glrCkHHzRY",
	authDomain: "twitter-clone-ffb7e.firebaseapp.com",
	projectId: "twitter-clone-ffb7e",
	storageBucket: "twitter-clone-ffb7e.appspot.com",
	messagingSenderId: "373238979059",
	appId: "1:373238979059:web:767ce598756cef1b9dda86",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
