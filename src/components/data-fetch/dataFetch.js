import './dataFetch.css';
import { useState, useEffect } from 'react';

function Data() {

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        console.log(data);
    }

    return (
        <div>

        </div>
    );
}

export default Data;