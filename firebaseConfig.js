import { initializeApp } from "@react-native-firebase/app";

const firebaseConfig = {
    apiKey: 'AIzaSyDxb9unKydSY7lhhxktxLupHECBSrWykF8',
    authDomain: 'leafnote-bd465.firebaseapp.com',
    projectId: 'leafnote-bd465',
    storageBucket: 'Your-Storage-Bucket',
    messagingSenderId: 'Your-Messaging-Sender-ID',
    appId: 'Your-App-ID',
};

export const firebaseApp = initializeApp(firebaseConfig);