import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote, startDelete } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
    const note = useSelector((state) => state.notes.active);
    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm(note);

    const { title, body } = formValues;

    const activeID = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeID.current) {
            reset(note);
            activeID.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(setActiveNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDelete(note.id))
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                    className="notes__title-input"
                    placeholder="What happened today?"
                    type="text"
                />
                <textarea
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                    placeholder="Write your thoughts"
                    className="notes__textarea"></textarea>
                <div className="notes__image">
                    {note.url && <img src={note.url} alt="img" />}
                </div>
            </div>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default NoteScreen;
