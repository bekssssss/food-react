import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import IngredientList from '../components/IngredientList';
import BackButton from '../components/BackButton';

const DishPageContainer = styled.div`
  padding: 20px;
`;

const DishImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin: 20px 0;
`;

const DishTitle = styled.h1`
  font-size: 32px;
  margin: 10px 0;
`;

const Instructions = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 20px 0;
`;

const VideoContainer = styled.div`
  margin: 20px 0;
`;

const DishPage = () => {
    const { id } = useParams();
    const [dish, setDish] = useState(null);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                setDish(response.data.meals[0]);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [id]);

    if (!dish) return <div>Loading...</div>;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (dish[`strIngredient${i}`]) {
            ingredients.push(dish[`strIngredient${i}`]);
        }
    }

    return (
        <DishPageContainer>
            <BackButton />
            <DishTitle>{dish.strMeal}</DishTitle>
            <DishImage src={dish.strMealThumb} alt={dish.strMeal} />
            <Instructions>{dish.strInstructions}</Instructions>
            <h2>Ingredients</h2>
            <IngredientList ingredients={ingredients} />
            <h2>Video</h2>
            <VideoContainer>
                {dish.strYoutube && (
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${dish.strYoutube.split('=')[1]}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </VideoContainer>
        </DishPageContainer>
    );
};

export default DishPage;
