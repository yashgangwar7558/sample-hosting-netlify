import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAlcgC1u_7v84HHBdN7ZECHI4YzyFNaLsQ",
    authDomain: "fir-login-b78c9.firebaseapp.com",
    projectId: "fir-login-b78c9",
    storageBucket: "fir-login-b78c9.appspot.com",
    messagingSenderId: "205036109873",
    appId: "1:205036109873:web:f5a24d25255f4a8a719510",
    measurementId: "G-XNZGEP960E"
};

firebase.initializeApp(config);

export {firebase}

// i will get this config wherever i need to firebase 