import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyA_02Ur3_mm63EzQTgtqb1lN4IMfdDx0kk",
        authDomain: "team-hacaton.firebaseapp.com",
        projectId: "team-hacaton",
        storageBucket: "team-hacaton.appspot.com",
        messagingSenderId: "902666169203",
        appId: "1:902666169203:web:be9fcd09445afa3e697306"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const firestore = getFirestore();
const auth = getAuth();

export const googleContext = createContext(null);

ReactDOM.render(
    <googleContext.Provider value={{
        auth, 
        provider
    }}>
        <App />
    </googleContext.Provider>
   ,
   document.getElementById('root')
);
 
