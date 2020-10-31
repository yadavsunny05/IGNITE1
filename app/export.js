import {firestoreExport} from 'node-firestore-import-export';
import * as firebase from 'firebase-admin';
 
firebase.initializeApp({
    apiKey: "AIzaSyDg8xxqFZChtUNGWst1i2mWMP11l6Oe6gU",                             
    authDomain: "election-be139.firebaseapp.com",         
    databaseURL: "https://election-be139.firebaseio.com", 
    storageBucket: "election-be139.appspot.com",          
    messagingSenderId: "123456789"                  
});
 
const collectionRef = firebase.firestore().collection('election_try');
 
firestoreExport(collectionRef)
    .then(data=>console.log(data));