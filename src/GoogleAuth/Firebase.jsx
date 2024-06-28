// GoogleAuth/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDJlv7VVoWjUVivoAhq3ufI2qmITagZD4I",
  authDomain: "roughridepokertour.firebaseapp.com",
  projectId: "roughridepokertour",
  // Add other Firebase config properties as needed
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
