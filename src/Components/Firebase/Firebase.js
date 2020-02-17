import React, {Component} from 'react';
import app from 'firebase/app'

const config = {
    apiKey: "AIzaSyDHUevy-iQN2qbNWhi73URjKbj-UpDEWkQ",
    authDomain: "tedxpgyouth.firebaseapp.com",
    databaseURL: "https://tedxpgyouth.firebaseio.com",
    projectId: "tedxpgyouth",
    storageBucket: "tedxpgyouth.appspot.com",
    messagingSenderId: "178491429001",
    appId: "1:178491429001:web:042ba6b441a9a7b8f37658"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;