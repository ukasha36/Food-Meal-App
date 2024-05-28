// src/components/RandomMealGenerator.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { FavoritesContext } from '../Context/FavoritesContext';

const RandomMealGenerator = () => {
  const [randomMeal, setRandomMeal] = useState(null);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const fetchRandomMeal = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => setRandomMeal(response.data.meals[0]))
      .catch(error => console.error('Error fetching random meal:', error));
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  const addFavorite = meal => {
    if (!favorites.some(fav => fav.idMeal === meal.idMeal)) {
      setFavorites([...favorites, meal]);
    }
  };

  return (
    <div className="p-d-flex p-jc-center p-mt-5">
      <div className="p-col-10 p-md-6">
        {randomMeal && (
          <Card title={randomMeal.strMeal} className="p-mb-3">
            <div className="p-d-flex p-jc-center">
              <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} className="p-mb-2" />
            </div>
            <Button 
              label={favorites.some(fav => fav.idMeal === randomMeal.idMeal) ? 'Added to Favourites' : 'Add to Favourites'}
              onClick={() => addFavorite(randomMeal)}
              className={favorites.some(fav => fav.idMeal === randomMeal.idMeal) ? 'p-button-success' : 'p-button-primary'}
            />
          </Card>
        )}
        <Button label="Generate Another Meal" onClick={fetchRandomMeal} className="p-button-raised p-button-rounded" />
      </div>
    </div>
  );
};

export default RandomMealGenerator;
