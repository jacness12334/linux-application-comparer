import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js'
const firebaseConfig = {
    apiKey: "AIzaSyDmHgSoeUhBe8pZGoRE4zdakqcjIJYcilc",
    authDomain: "linux-program-comparer.firebaseapp.com",
    projectId: "linux-program-comparer",
    storageBucket: "linux-program-comparer.appspot.com",
    messagingSenderId: "713728187251",
    appId: "1:713728187251:web:6abcddf9ae0a584e878306",
    measurementId: "G-K6EWLCFYR0"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const googleAuth = new GoogleAuthProvider();

function renderResults(resultDict) {
}

function hideResultInstructions() {

}

function toggleOptions() {

}

function search() {

}

function updateDatabase() {

}

function signIn() {
    const auth = getAuth();
    signInWithPopup(auth, googleAuth).then((result) => {
        const user = result.user;
        console.log(user);
    });
}

window.onload = () => {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            retrieveResults(searchBar.value);
        }
    });

    const options = document.getElementsByClassName('options');
    options[4].addEventListener('click', signIn());
}