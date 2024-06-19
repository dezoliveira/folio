import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLL7iF6ohkvpUpHXOcAsa2tPXY9YrSt00",
  authDomain: "folio-9c700.firebaseapp.com",
  databaseURL: "https://folio-9c700-default-rtdb.firebaseio.com",
  projectId: "folio-9c700",
  storageBucket: "folio-9c700.appspot.com",
  messagingSenderId: "135694635697",
  appId: "1:135694635697:web:ed3ea07ea0597b70840890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)