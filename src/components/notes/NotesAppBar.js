import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

const NotesAppBar = () => {
    const dispatch = useDispatch()
    const note = useSelector(state => state.notes.active)

    const handleSave = () => {
        dispatch(startSaveNote(note))
    }

    return (
        <div className="notes__appbar">
            <span>January 13 2020</span>
            <div>
                <button className="btn">
                    Picture
                </button>
                <button onClick={handleSave}className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
