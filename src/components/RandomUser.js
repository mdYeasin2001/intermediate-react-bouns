import React, { useEffect, useState } from 'react';

const RandomUser = () => {
    const [user, setUser] = useState({});
    const {gender, email, cell, name} = user;
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => setUser(...data.results))
    }, [])
    return (
        <div>
            <h1>Name-title: {name && name.title}</h1>
            <h2>full name: {name?.first + ' ' + name?.last}</h2>
        </div>
    );
};

export default RandomUser;