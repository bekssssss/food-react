import React from 'react';
import styled from 'styled-components';
import Ingredient from './Ingredient';

const IngredientListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const IngredientList = ({ ingredients }) => {
    return (
        <IngredientListContainer>
            {ingredients.map(ingredient => (
                <Ingredient key={ingredient} ingredient={ingredient} />
            ))}
        </IngredientListContainer>
    );
};

export default IngredientList;
