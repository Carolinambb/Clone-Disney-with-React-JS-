
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDWLLrKaqTz8trriS8RQLrAZDiykezDFCQ",
    authDomain: "disney-plus-clone-d9231.firebaseapp.com",
      projectId: "disney-plus-clone-d9231",
      storageBucket: "disney-plus-clone-d9231.appspot.com",
      messagingSenderId: "725000284649",
      appId: "1:725000284649:web:ca15f0d666493a2fd78378",
      measurementId: "G-PH6ZR5FL8B"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
// provider helps us authenticate with google
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;