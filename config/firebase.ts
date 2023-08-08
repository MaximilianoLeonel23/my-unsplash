import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApW6Qbfscn6-NntaWAW-LRyDvNiQ9uRro",
  authDomain: "my-unsplash-21118.firebaseapp.com",
  projectId: "my-unsplash-21118",
  storageBucket: "my-unsplash-21118.appspot.com",
  messagingSenderId: "821307001320",
  appId: "1:821307001320:web:c0ae77b27676524ff37c5d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
