import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input className="notes__title-input" placeholder="What happened today?" type="text"/>
                <textarea placeholder="Write your thoughts" className="notes__textarea"></textarea>
                <div className="notes__image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="tree"/>
                </div>
            </div>
        </div>
    )
}

export default NoteScreen
