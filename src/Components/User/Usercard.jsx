import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Usercard = (props) => {
    const { picture, phone, gender, name, email } = props;
    const [togglereq, settogglereq] = useState(true);
    const [shownumber, setshownumber] = useState(false);

    return (
        <>
            <Card className="m-3  text-light" style={{ width: '18rem', backgroundColor: 'gray' }}>
                <Card.Img variant="top" src={picture.medium} />
                <Card.Body className="text-center">
                    <Card.Title>{`${name.title} ${name.first} ${name.last}`}</Card.Title>
                    <Card.Text>{`Gender : ${gender}`}</Card.Text>

                    <Card.Text>{shownumber ? phone : <Button onClick={() => setshownumber((pre) => !pre)}>Show Number</Button>}</Card.Text>
                    <Link to={`/user/${email}`} state={props.data}>
                        <Button className="d-block m-auto my-3"> View Details</Button>
                    </Link>
                    <Button variant="primary" onClick={() => props.handleonclick(props, togglereq, settogglereq)}>
                        {togglereq ? 'Add Friend' : 'Cancel Req'}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};
