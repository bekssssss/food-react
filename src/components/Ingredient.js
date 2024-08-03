import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IngredientContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

const IngredientName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Ingredient = ({ ingredient }) => {
    return (
        <IngredientContainer>
            <Link to={`/ingredient/${ingredient}`}>
                <IngredientName>{ingredient}</IngredientName>
            </Link>
        </IngredientContainer>
    );
};

export default Ingredient;
