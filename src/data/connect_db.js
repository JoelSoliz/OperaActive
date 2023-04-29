import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAoyz6T6ipxvLsrtwhqhujfYeDFXdrs0eQ",
  authDomain: "operaactive-20c50.firebaseapp.com",
  projectId: "operaactive-20c50",
  storageBucket: "operaactive-20c50.appspot.com",
  messagingSenderId: "629076790233",
  appId: "1:629076790233:web:ef06fb2de245800a1d27c8",
  measurementId: "G-C3DZNSMC8C"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const auth = getAuth(app);

export { app, database, auth };