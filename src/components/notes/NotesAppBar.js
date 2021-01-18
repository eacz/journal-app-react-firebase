import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadImage } from '../../actions/notes';

const NotesAppBar = () => {
    const dispatch = useDispatch();
    const note = useSelector((state) => state.notes.active);

    const handleSave = () => {
        dispatch(startSaveNote(note));
    };

    const handleUploadPicture = () => {
        document.querySelector('#fileSelector').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startUploadImage(file))
        }
    };

    return (
        <div className="notes__appbar">
            <span>January 13 2020</span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />

            <div>
                <button onClick={handleUploadPicture} className="btn">
                    Picture
                </button>
                <button onClick={handleSave} className="btn">
                    Save
                </button>
            </div>
        </div>
    );
};

export default NotesAppBar;
