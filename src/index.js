// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { header, mainWidget } from "./elements";
import { events } from "./events";
import { getDocument } from "./firebaseData";

const firebaseConfig = {
  apiKey: "AIzaSyD8DYJlsL9KQ0mRbW-FKtxvzvpEh8Sfkak",
  authDomain: "reporter-f4a62.firebaseapp.com",
  projectId: "reporter-f4a62",
  storageBucket: "reporter-f4a62.appspot.com",
  messagingSenderId: "181593667588",
  appId: "1:181593667588:web:93589c5a1a0e56a22b9d51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

// initialize events
const elements = Object.keys(events);
for (let element of elements) {
  let evts = Object.keys(events[element]);
  for (let event of evts) {
    $(element).on(event, events[element][event]);
  }
}
