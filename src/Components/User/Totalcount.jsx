import React from 'react';

export const Totalcount = (props) => {
    return (
        <div className="text-light text-center">
            <h1>Total sented Req : {props.total.length} </h1>
        </div>
    );
};
