import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDMgZgCmj0caUy_BgM12yjbWMNEFYomot0",
	authDomain: "portfolio-2023-166e2.firebaseapp.com",
	databaseURL: "https://portfolio-2023-166e2-default-rtdb.firebaseio.com",
	projectId: "portfolio-2023-166e2",
	storageBucket: "portfolio-2023-166e2.appspot.com",
	messagingSenderId: "974256869542",
	appId: "1:974256869542:web:ac033b28770a879f7d6467",
	measurementId: "G-9Y9R0D6MRV",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Pass the firebaseApp to getAuth
const storage = getStorage(firebaseApp); // Pass the firebaseApp to getStorage
const db = getFirestore(firebaseApp); // Pass the firebaseApp to getFirestore

export { auth, db, storage };
