import React, { useEffect, useState } from 'react';
import { Usercard } from './Usercard';
import { Totalcount } from './Totalcount';
import { useLocation } from 'react-router-dom';

export const User = () => {
    const [data, setdata] = useState([]);

    let url;
    useLocation().pathname === '/user' ? (url = 'https://randomuser.me/api/?results=200') : (url = 'https://randomuser.me/api/?results=12');
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((r) => setdata(r.results));
    }, [url]);

    const [totalreqdata, settotalreqdata] = useState([]);
    function handleonclick(element, togglereq, settogglereq) {
        if (togglereq === true) {
            settotalreqdata((pre) => {
                const holder = [...pre, element];
                return holder;
            });
        } else {
            settotalreqdata((pre) => {
                const holder = pre.filter((el) => el.email !== element.email);
                return holder;
            });
        }
        settogglereq((pre) => !pre);
    }

    return (
        <div className="container justify-content-center ps-5">
            <div>
                {totalreqdata && <Totalcount total={totalreqdata} />}
                <div className="d-flex container  flex-wrap">{data && data.map((element, index) => <Usercard key={element.email} data={data} handleonclick={handleonclick} {...element} />)}</div>
            </div>
        </div>
    );
};
