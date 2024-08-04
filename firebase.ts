// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8uIBv4AYfIixheyqylNS4rqAjXKzmSTE",
    authDomain: "refreshing-oven-420120.firebaseapp.com",
    projectId: "refreshing-oven-420120",
    storageBucket: "refreshing-oven-420120.appspot.com",
    messagingSenderId: "551504049007",
    appId: "1:551504049007:web:dd4ccc57ddeb46ddcf6e9a"
};

const app = initializeApp(firebaseConfig);
const storage = getFirestore(app);

export { storage };
