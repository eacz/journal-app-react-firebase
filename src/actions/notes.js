import { db } from '../firebase/firebaseConfig';
import loadNotes from '../helpers/loadNotes';
import Swal from 'sweetalert2';
import types from '../types/types';
import fileUpload from '../helpers/fileUpload';

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

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        if (!note.url) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        try {
            await db
                .doc(`${uid}/journal/notes/${note.id}`)
                .update(noteToFirestore);
            dispatch(refreshNote(note.id, noteToFirestore));

            Swal.fire('Saved', note.title, 'success');
        } catch (error) {
            console.log(error);
        }
    };
};

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: { id, note: { id, ...note } },
});

export const startUploadImage = (file) => {
    return async (dispatch, getState) => {
        const activeNote = getState().notes.active;

        Swal.fire({
            title: ' Uploading',
            text: 'Please wait...',
            showConfirmButton: false,
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            },
        });

        const fileURL = await fileUpload(file);
        activeNote.url = fileURL;

        dispatch(startSaveNote(activeNote));

        Swal.close();
    };
};

export const startDelete = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        try {
            await db.doc(`${uid}/journal/notes/${id}`).delete();
            dispatch(deleteNote(id))
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteNote = (id) => {
    return {
        type: types.notesDelete,
        payload: id,
    };
};
