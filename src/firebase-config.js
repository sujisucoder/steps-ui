import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCtJa67IC23TA1Cxm_FxgUIcUccfIBSXW4",
    authDomain: "l7-auth.firebaseapp.com",
    projectId: "l7-auth",
    storageBucket: "l7-auth.appspot.com",
    messagingSenderId: "604887690862",
    appId: "1:604887690862:web:4a75389692879e3a16807f",
    measurementId: "G-R5JKY93EMV"
  };

 export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app) ;
// const analytics = getAnalytics(app);