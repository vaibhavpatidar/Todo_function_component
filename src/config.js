import { initializeApp } from "firebase/app";
import {Database, getDatabase} from "firebase/database"

const config = {
    apiKey: "AIzaSyCOmLPp3guI7Bdz9t4Zohqw3zElq9P4V0s",
    authDomain: "todo-7ae75.firebaseapp.com",
    databaseURL: "https://todo-7ae75-default-rtdb.firebaseio.com",
    projectId: "todo-7ae75",
    storageBucket: "todo-7ae75.appspot.com",
    messagingSenderId: "167965963112",
    appId: "1:167965963112:web:5d9b43c6ccb24695f09cdd",
    measurementId: "G-KPFKS36ZRS"
  }
  
  let app=initializeApp(config);
  let db =getDatabase(app);
    
  export default db;