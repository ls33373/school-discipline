import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXqBRlU4XZ9ZMqayO3o-h8nGYVTRzDzVI",
  authDomain: "school-discipline-727ff.firebaseapp.com",
  projectId: "school-discipline-727ff",
  storageBucket: "school-discipline-727ff.firebasestorage.app",
  messagingSenderId: "68391221735",
  appId: "1:68391221735:web:f99c4c9e9befb0fe282542"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);