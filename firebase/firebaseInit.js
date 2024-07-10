import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp, updateDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app, "gs://my-custom-bucket");

const docRef = doc(db, "objects", "some-id");
export const updateTimestamp = await updateDoc(docRef, {
  timestamp: serverTimestamp(),
});
