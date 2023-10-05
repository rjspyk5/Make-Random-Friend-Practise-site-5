import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export const Dropdownn = () => {
    return (
        <>
            <Dropdown style={{ color: 'red' }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic"></Dropdown.Toggle>

                <Dropdown.Menu>
                    <h6>Total</h6>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};
