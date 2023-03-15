import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHLIX4vEkStm5mhEe_jc5pyDIm7r1e_o4",
  authDomain: "jobrtk-51d00.firebaseapp.com",
  projectId: "jobrtk-51d00",
  storageBucket: "jobrtk-51d00.appspot.com",
  messagingSenderId: "689505144206",
  appId: "1:689505144206:web:38b95ac7ac820f90a8e8df",
  measurementId: "G-FGP7PDCRCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth