import { initializeApp } from 'firebase/app';
import { serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALPvUnRos1COiPB2e_c02yvYpls-YzcDM",
    authDomain: "fireblogs-92392.firebaseapp.com",
    projectId: "fireblogs-92392",
    storageBucket: "fireblogs-92392.appspot.com",
    messagingSenderId: "765840454308",
    appId: "1:765840454308:web:8901bc532ee563bcdcec31",
    measurementId: "G-VVBYVQQFQV"
};

const firebaseApp = initializeApp(firebaseConfig);
const timestamp = serverTimestamp();
export { timestamp };
export default firebaseApp.firestore()