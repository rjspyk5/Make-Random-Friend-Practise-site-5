import React, { useEffect, useState } from 'react';
import { Usercard } from './Usercard';
import { Totalcount } from './Totalcount';

export const User = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=51')
            .then((res) => res.json())
            .then((r) => setdata(r.results));
    }, []);

    const [totalreqdata, settotalreqdata] = useState([]);
    function handleonclick(element, togglereq, settogglereq) {
        settogglereq((pre) => !pre);
        settotalreqdata((pre) => {
            const holder = [...pre, element];

            return holder;
        });
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
