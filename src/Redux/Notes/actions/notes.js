import NOTE_ACTION_TYPES from "../constants/ActionTypes";
import { db } from '../../../firebase.js';
import { collection, addDoc, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';

export const getNotes = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, "notes"));
        var data = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.data()
            d["id"] = doc.id
            data.push(d)
        });
        dispatch({ type: NOTE_ACTION_TYPES.FETCH_ALL, payload: data })

    } catch (err) {
        console.log(err.message);
    }

}


export const addNote = (note) => {
    try {
        addDoc(collection(db, 'notes'), {
            text: note.text,
            date: new Date().toLocaleDateString()
        })
        return { type: NOTE_ACTION_TYPES.ADD_NOTE, payload: note };
    } catch (ex) {
        console.log(ex.toString())
    }
};

export const removeNote = (id) => {
    deleteDoc(doc(db, 'notes', id))
    return { type: NOTE_ACTION_TYPES.REMOVE_NOTE, payload: { id } };
};

export const editNote = (note) => async (dispatch) => {
    await setDoc(doc(db, 'notes', note.id), {
        text: note.text,
        date: new Date().toLocaleDateString()
    })
    dispatch({ type: NOTE_ACTION_TYPES.EDIT_NOTE, payload: note })
};

