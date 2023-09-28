import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { saveDataToLocalStorage } from '../LocalDataBase/LocalDatabase';
export const Usercard = (props) => {
    const { picture, phone, gender, name, email } = props;
    const fullname = `${name.title} ${name.first} ${name.last}`;
    const [togglereq, settogglereq] = useState(true);
    const [shownumber, setshownumber] = useState(false);
    const [sendmessage, setsendmessage] = useState(false);
    const [message, setmessage] = useState();
    const [mszbtn, setmszbtn] = useState(false);

    const handleOnChange = (e) => setmessage(e.target.value);

    const handleOnMessageClick = () => {
        setsendmessage((pre) => !pre);
        setmszbtn((pre) => !pre);
        mszbtn && saveDataToLocalStorage(fullname, email, message);
    };

    return (
        <>
            <Card className="m-3  text-light" style={{ width: '18rem', backgroundColor: 'gray' }}>
                <Card.Img variant="top" src={picture.medium} />
                <Card.Body className="text-center">
                    <Card.Title>{`${name.title} ${name.first} ${name.last}`}</Card.Title>
                    <Card.Text>{`Gender : ${gender}`}</Card.Text>
                    {sendmessage ? (
                        <textarea name="" id="" cols="30" rows="5" value={message} onChange={handleOnChange}></textarea>
                    ) : (
                        <div>
                            <Card.Text>{shownumber ? phone : <Button onClick={() => setshownumber((pre) => !pre)}>Show Number</Button>}</Card.Text>
                            <Link to={`/user/${email}`} state={props.data}>
                                <Button className="d-block m-auto my-3"> View Details</Button>
                            </Link>
                        </div>
                    )}
                    <Button variant="primary" onClick={() => props.handleonclick(props, togglereq, settogglereq)}>
                        {togglereq ? 'Add Friend' : 'Cancel Req'}
                    </Button>
                    <Button onClick={handleOnMessageClick} className="ms-1">
                        {mszbtn ? 'Send Message' : 'Write Message'}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};
