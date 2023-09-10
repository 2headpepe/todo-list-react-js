import React from 'react';

const Note = ({name,description}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Note;