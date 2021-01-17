import React from 'react';

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:
                        'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png)',
                }}></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">New day</p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed par
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Friday</span>
                <h4>10</h4>
            </div>
        </div>
    );
};

export default JournalEntry;
