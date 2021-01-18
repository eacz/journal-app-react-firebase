import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../actions/notes';

const JournalEntry = ({ id, title, body, date, url }) => {
    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleSetActive = () => {
        dispatch(setActiveNote(id, { title, body, date, url }));
    };
    return (
        <div
            onClick={handleSetActive}
            className="journal__entry pointer animate__animated animate__backInLeft">
            {url && (
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`,
                    }}></div>
            )}

            <div className="journal__entry-body">
                <p className="journal__entry-title">{title}</p>
                <p className="journal__entry-content">{body}</p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    );
};

export default JournalEntry;
