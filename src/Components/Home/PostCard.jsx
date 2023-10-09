import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './postCard.css';
import { SlLike } from 'react-icons/sl';
import { FaRegComment } from 'react-icons/fa';
import { Comment } from './Comment';

export const PostCard = (props) => {
    const { title, body, id } = props.post;
    const data = props.data;
    const EachPerson = data && data.find((el) => el.serialnumber === id);
    const pic = EachPerson && EachPerson.picture.medium;
    const fullname = EachPerson && `${EachPerson.name.title} ${EachPerson.name.first} ${EachPerson.name.last}`;
    const [like, setlike] = useState(false);
    const [commentClick, setcommentClick] = useState(false);
    let liked;
    like ? (liked = { color: 'red' }) : (liked = { color: 'black' });
    const comment = props.comments.filter((el) => id === el.postId);

    return (
        <div className="m-3">
            <Card>
                <Card.Body>
                    <Card.Title className="d-flex">
                        <div>
                            <img className=" rounded-circle img-fluid" src={pic} alt="" />
                        </div>
                        <p className="pt-4 ps-2">{fullname}</p>
                    </Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <hr />
                    <div className="d-flex w-75 m-auto">
                        <button className="me-2 LikeButtonStyle w-50 " onClick={() => setlike((pre) => !pre)}>
                            <SlLike style={liked} className="like" />
                            <span style={liked}>Like</span>
                        </button>
                        <button className=" LikeButtonStyle w-50" onClick={() => setcommentClick((pre) => !pre)}>
                            <FaRegComment className="mb-1" /> Comment
                        </button>
                    </div>
                    <hr />

                    {commentClick && comment.map((el) => <Comment key={id} comment={el} />)}
                </Card.Body>
            </Card>
        </div>
    );
};
