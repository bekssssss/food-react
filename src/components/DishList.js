import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Dish from './Dish';

const DishListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(response => {
                setDishes(response.data.meals);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <DishListContainer>
            {dishes.map(dish => (
                <Dish key={dish.idMeal} dish={dish} />
            ))}
        </DishListContainer>
    );
};

export default DishList;
