import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCY8RjQWeAM2mJKbdrV28Yg1qrZVyf--JI",
  authDomain: "digi-transformation.firebaseapp.com",
  projectId: "digi-transformation",
  storageBucket: "digi-transformation.appspot.com",
  messagingSenderId: "104140657955",
  appId: "1:104140657955:web:1eb64a895fa93e05f62896"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}