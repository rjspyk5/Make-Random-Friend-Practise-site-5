import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const PostCard = (props) => {
    const { title, body, id } = props.post;
    const data = props.data;
    const EachPerson = data && data.find((el) => el.serialnumber === id);
    const pic = EachPerson && EachPerson.picture.medium;

    const fullname = EachPerson && `${EachPerson.name.title} ${EachPerson.name.first} ${EachPerson.name.last}`;

    return (
        <div className="m-3">
            <Card>
                <Card.Body>
                    <Card.Title className="d-flex">
                        <img className=" rounded-circle " src={pic} alt="" />

                        <p className="pt-4 ps-2">{fullname}</p>
                    </Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Button className="me-2">Like</Button>
                    <Button>Comment</Button>
                </Card.Body>
            </Card>
        </div>
    );
};
