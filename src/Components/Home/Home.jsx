import React, { useContext, useEffect, useState } from 'react';
import { PostCard } from './PostCard';
import { mszbtnContext } from '../../App';

export const Home = () => {
    const [, , , , data, setdata, posts, setposts, comments, setcomments] = useContext(mszbtnContext);
    return <div className=" container">{posts && posts.map((el) => <PostCard key={el.id} post={el} data={data} comments={comments} />)}</div>;
};
