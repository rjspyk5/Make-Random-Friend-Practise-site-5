import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Fetch(url) {
    const [fetchdata, setfetchdata] = useState();
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setfetchdata(response);
                setisLoading(false);
            })
            .catch((err) => {
                seterror(err.message);
                setisLoading(false);
            });
    }, [url]);

    return { fetchdata, error, isLoading, setfetchdata };
}
