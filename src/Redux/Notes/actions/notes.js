import NOTE_ACTION_TYPES from "../constants/ActionTypes";
import { db } from '../../../firebase.js';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';

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
    return { type: NOTE_ACTION_TYPES.ADD_NOTE, payload: note };
};

// export const removeNote = (id) => {
//     return { type: NOTE_ACTION_TYPES.REMOVE_NOTE, payload: { id } };
// };

// export const editNote = (note) => {
//     return { type: NOTE_ACTION_TYPES.EDIT_NOTE, payload: note };
// };


// export const createPost = (post) => async (dispatch) => {
//     try {
//         const { data } = await api.createPost(post);
//         dispatch({ type: CREATE, payload: data })
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post);
//         dispatch({ type: UPDATE, payload: data })
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deltePost(id);
//         dispatch({ type: DELETE, payload: id })
//     } catch (err) {
//         console.log(err.message);
//     }
// }
