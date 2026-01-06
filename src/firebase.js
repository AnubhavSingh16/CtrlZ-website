import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJEkUCqx5SDkTWaKMYda3TvMGGV7j9t_E",
  authDomain: "ctrlzsweb.firebaseapp.com",
  projectId: "ctrlzsweb",
  storageBucket: "ctrlzsweb.firebasestorage.app",
  messagingSenderId: "625987349480",
  appId: "1:625987349480:web:e90f6fc03cbb2b13c0925d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
