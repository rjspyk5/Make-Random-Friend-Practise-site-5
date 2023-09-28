import React from 'react';

export const Totalcount = (props) => {
    return (
        <div className="text-light d-flex  justify-content-end sticky-top">
            <h6>Total Req sent: {props.total.length} </h6>
        </div>
    );
};
