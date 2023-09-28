import React, { useEffect, useState } from 'react';
import { getDataFromLocalStorage, removeDataFromLocalStorage } from '../LocalDataBase/LocalDatabase';
import { Personmsz } from './Personmsz';

export const Message = () => {
    const [mszdata, setmszdata] = useState([]);

    const handleOnClick = (element) => {
        setmszdata((pre) => {
            const holder = pre.filter((el) => element.email !== el.email);
            removeDataFromLocalStorage(element.email);
            return holder;
        });
    };

    useEffect(() => {
        setmszdata(getDataFromLocalStorage());
    }, [setmszdata]);

    return (
        <div style={{ maxWidth: '70%', margin: 'auto' }}>
            {mszdata.map((elment) => (
                <Personmsz key={elment.email} data={elment} handleOnClick={handleOnClick} />
            ))}
        </div>
    );
};
