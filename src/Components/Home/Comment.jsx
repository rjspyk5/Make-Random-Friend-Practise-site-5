import React from 'react';

export const Comment = (props) => {
    const { body, email, name } = props.comment;
    console.log(props.comment);
    return (
        <div className="container">
            <div className="container">
                <h6>{email}</h6>
                <p>{body}</p>
            </div>
        </div>
    );
};
