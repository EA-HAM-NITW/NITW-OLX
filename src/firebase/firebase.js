import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyClcfpLFLuCNcPt9YRvQPFKqBkCaIEhzcc",
  authDomain: "nitw-olx.firebaseapp.com",
  projectId: "nitw-olx",
  storageBucket: "nitw-olx.appspot.com",
  messagingSenderId: "524949727663",
  appId: "1:524949727663:web:ad94d5e1eb7d4ceba7e75a",
  measurementId: "G-MFG131G2M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth};