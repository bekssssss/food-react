import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../components/BackButton';

const IngredientPageContainer = styled.div`
    padding: 20px;
`;

const DishContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;
`;

const DishImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`;

const DishTitle = styled.h2`
    font-size: 24px;
    margin: 10px 0;
`;

const IngredientPage = () => {
    const { ingredient } = useParams();
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(response => {
                setDishes(response.data.meals);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [ingredient]);

    return (
        <IngredientPageContainer>
            <BackButton />
            <h1>Dishes with {ingredient}</h1>
            <div>
                {dishes.map(dish => (
                    <DishContainer key={dish.idMeal}>
                        <Link to={`/dish/${dish.idMeal}`}>
                            <DishTitle>{dish.strMeal}</DishTitle>
                        </Link>
                        <DishImage src={dish.strMealThumb} alt={dish.strMeal} />
                    </DishContainer>
                ))}
            </div>
        </IngredientPageContainer>
    );
};

export default IngredientPage;
