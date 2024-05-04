import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrashComponent() {
    const [trashData, setTrashData] = useState([]);

    useEffect(() => {
        axios.get('/trash')
            .then(response => {
                setTrashData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching trash data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Trash Data</h1>
            <ul>
                {trashData.map(item => (
                    <li key={item.id}>
                        <img src={item.photo_url} alt="Trash" />
                        <p>Address: {item.address}</p>
                        <p>Request Comment: {item.request_comment}</p>
                        <p>Price: {item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrashComponent;
