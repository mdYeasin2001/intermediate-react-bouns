import React, { useEffect, useState } from 'react';

const FindFoods = () => {
    const [inputText, setInputText] = useState('');
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, [inputText])
    return (
        <div>
            <h1>Find Your Favorite Foods</h1>
            <input type="text" onChange={(event) => setInputText(event.target.value)}/>
            <h3>Food Name: {inputText}</h3>
            <ul>{foods?.map((food, i) => <li key={i}>{food.strMeal}</li>)}</ul>
        </div>
    );
};

export default FindFoods;