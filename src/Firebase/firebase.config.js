// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7vbvwJy1X2mNGyqWQ7VbgsgSxBKZ-xqw",
    authDomain: "chef-hunter-6cc2b.firebaseapp.com",
    projectId: "chef-hunter-6cc2b",
    storageBucket: "chef-hunter-6cc2b.appspot.com",
    messagingSenderId: "689912809624",
    appId: "1:689912809624:web:ade056d3fb7d58961568ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;