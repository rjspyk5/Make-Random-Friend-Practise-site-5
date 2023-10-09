import React, { useContext, useEffect, useState } from 'react';
import { Usercard } from './Usercard';
import { Totalcount } from './Totalcount';
import { mszbtnContext } from '../../App';

export const User = () => {
    const [mszbtn, setmszbtn, mszdata, setmszdata, data, setdata] = useContext(mszbtnContext);
    const [seeAllToggleStatus, setseeAllToggleStatus] = useState(false);
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
    let dataum;
    seeAllToggleStatus ? (dataum = [...data]) : (dataum = data.slice(1, 6));
    const SeeAllText = seeAllToggleStatus ? 'Show less' : 'See All';
    return (
        <>
            <div>
                <div>
                    {totalreqdata && <Totalcount total={totalreqdata} />}
                    <div className="d-flex justify-content-center flex-wrap">
                        {dataum && dataum.map((element, index) => <Usercard key={element.email} data={dataum} handleonclick={handleonclick} {...element} />)}
                    </div>
                </div>
            </div>

            <div>
                <button style={{ marginLeft: '78%' }} className="btn text-light" onClick={() => setseeAllToggleStatus((pre) => !pre)}>
                    {data && SeeAllText}
                </button>
            </div>
        </>
    );
};
