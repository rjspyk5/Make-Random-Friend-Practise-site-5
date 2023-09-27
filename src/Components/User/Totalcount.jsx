import React from 'react';

export const Totalcount = (props) => {
    return (
        <div style={{ backgroundColor: '#4c4c4c' }} className="text-light text-center sticky-top">
            <h1>Total Req sent: {props.total.length} </h1>
        </div>
    );
};
