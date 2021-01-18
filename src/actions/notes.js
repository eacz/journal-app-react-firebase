import { db } from '../firebase/firebaseConfig';
import types from '../types/types';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(setActiveNote(doc.id, newNote));
    };
};

export const setActiveNote = (id, note) => ({
    type: types.notesActive,
    payload: { id, ...note },
});

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
});