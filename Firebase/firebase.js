import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC3EReTt5_uuWSI3-Pi4xy63boQR_M2gP0",
  authDomain: "missingwoman-2.firebaseapp.com",
  databaseURL: "https://missingwoman-2.firebaseio.com",
  projectId: "missingwoman-2",
  storageBucket: "missingwoman-2.appspot.com",
  messagingSenderId: "750348321637",
  appId: "1:750348321637:web:49888cbf5c40ce9704d78c",
  measurementId: "G-57H8L1GXG9"
};

firebase.initializeApp(firebaseConfig);
export default firebase;