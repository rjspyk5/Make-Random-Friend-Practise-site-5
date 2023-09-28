import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegTrashAlt } from 'react-icons/fa';

export const Personmsz = ({ data, handleOnClick }) => {
    return (
        <>
            <Card className="my-3">
                <Card.Header className="d-flex">
                    <h5>{data.name}</h5>
                    <FaRegTrashAlt onClick={() => handleOnClick(data)} className="ms-auto mt-3" />
                </Card.Header>
                <Card.Body>{data.msz}</Card.Body>
            </Card>
        </>
    );
};
