import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./index";

/**
 * Reads a document from the collection.
 * @param {string} path path to document
 * @returns {object|null} document or null
 */
async function getDocument(path) {
	const ref = doc(db, path);
	const res = await getDoc(ref);
	if (res.exists()) return res.data();
	else return null;
}

/**
 * Writes a new document to the collection.
 * @param {Firestore} db firestore database
 * @param {string} collectionName name of collection to write to
 * @param {object} data data to write in json format
 * @returns {string|Error} id of the document or error
 */
async function addDocument(db, collectionName, data) {
	try {
		const docRef = await addDoc(collection(db, collectionName), data);
		return docRef.id;
	} catch (e) {
		return new Error("Cannot add new Document", e);
	}
}


// Returns all documents in a collection
async function getAllDocuments (db, collectionName) {
	const querySnapshot = await getDocs(collection(db, collectionName));
	const snapshot = [];
	querySnapshot.forEach((doc) => snapshot.push([doc.id, doc.data()]));
	return snapshot;
}
export { getDocument, addDocument, getAllDocuments };
