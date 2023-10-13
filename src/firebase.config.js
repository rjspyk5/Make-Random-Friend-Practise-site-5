import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyC3Se3bm-TmO49uHkXGVOm3f6HS5XXRUb4',
    authDomain: 'randomchat-45e5f.firebaseapp.com',
    projectId: 'randomchat-45e5f',
    storageBucket: 'randomchat-45e5f.appspot.com',
    messagingSenderId: '296733183428',
    appId: '1:296733183428:web:53096536c6906766cea891'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
