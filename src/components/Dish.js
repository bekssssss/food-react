import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Dish = ({ dish }) => {
    return (
        <DishContainer>
            <Link to={`/dish/${dish.idMeal}`}>
                <DishTitle>{dish.strMeal}</DishTitle>
            </Link>
            <DishImage src={dish.strMealThumb} alt={dish.strMeal} />
        </DishContainer>
    );
};

export default Dish;
