import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEjQEk1YGk5hxZ0URwdMf9FGI-8Txc5YM",
  authDomain: "myblog-21862.firebaseapp.com",
  projectId: "myblog-21862",
  storageBucket: "myblog-21862.appspot.com",
  messagingSenderId: "787745156140",
  appId: "1:787745156140:web:7e4c66c9e2eadc1d8fb589",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const docRef = doc(db, "objects", "some-id");
export const updateTimestamp = await updateDoc(docRef, {
  timestamp: serverTimestamp(),
});
