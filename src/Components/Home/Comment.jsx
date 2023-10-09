import React from 'react';
import Card from 'react-bootstrap/Card';
import './postCard.css';
import { Likebutton } from './Likebutton';

export const Comment = ({ datas, comment }) => {
    const { body, id } = comment;

    const personWhoCommentArray = datas && datas.find((el) => id === el.serialnumber);
    const { name, picture } = personWhoCommentArray;
    const fullname = name && `${name.title} ${name.first} ${name.last}`;

    return (
        <div className="container d-flex ">
            <div>
                <img style={{ width: '30px' }} className="rounded-circle mt-2" src={picture.medium} alt="" />
            </div>

            <Card body className="cardbody">
                <h6>{fullname}</h6>
                <p>{body}</p>
                <div style={{ width: '100px', height: '30px', overflow: 'hidden' }}>
                    <Likebutton />
                </div>
            </Card>
        </div>
    );
};
