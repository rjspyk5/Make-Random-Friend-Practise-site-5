import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';

export const Userdetails = () => {
    const userEmail = useParams().userdetails;
    const data = useLocation().state;
    const personDetails = data.find((el) => el.email === userEmail);
    const { gender, email, name, picture, registered, location, phone } = personDetails;
    console.log(personDetails);
    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title style={{ maxWidth: '500px', margin: 'auto' }}>{`${name.title} ${name.first} ${name.last}`}</Modal.Title>
                </Modal.Header>
                <img style={{ maxWidth: '400px' }} className=" mt-3 ms-5 " src={picture.medium} alt="" />
                <Modal.Body>
                    <h4>{`Age : ${registered.age}`}</h4>
                    <h4>{`Gender : ${gender}`}</h4>
                    <h4>{`Email : ${email}`}</h4>
                    <h4>{`Phone : ${phone}`}</h4>

                    <h4>{`City: ${location.city}`}</h4>
                    <h4>{`State: ${location.state}`}</h4>
                    <h4>{`Country: ${location.country}`}</h4>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
};
