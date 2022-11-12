import React from 'react';

const JobListItem = ({id, name, description}) => {
    return (
        <li key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
        </li>
    );
};

export default JobListItem;