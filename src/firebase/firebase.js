import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMDnGAhYOElN9LHVidswiHxoK2rc6B56Y",
  authDomain: "proyecto-react-coderhous-b9025.firebaseapp.com",
  projectId: "proyecto-react-coderhous-b9025",
  storageBucket: "proyecto-react-coderhous-b9025.appspot.com",
  messagingSenderId: "153346078534",
  appId: "1:153346078534:web:03d5f97d9de4bd2e579747"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);