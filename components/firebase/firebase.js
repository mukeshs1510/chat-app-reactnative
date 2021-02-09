import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1g_vnz6054-dIp9-TRzrrakNPCzm-D1c",
  authDomain: "mycheatchat.firebaseapp.com",
  projectId: "mycheatchat",
  storageBucket: "mycheatchat.appspot.com",
  messagingSenderId: "655319511472",
  appId: "1:655319511472:web:704b3a16125dddf4a46675",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
