import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../Context/FavoritesContext';


const Meals = () => {
    const { category } = useParams();
    const [meals, setMeals] = useState([]);
    const { favorites, setFavorites } = useContext(FavoritesContext);
  
    useEffect(() => {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => setMeals(response.data.meals));
    }, [category]);
  
    const toggleFavorite = meal => {
      if (favorites.some(fav => fav.idMeal === meal.idMeal)) {
        setFavorites(favorites.filter(fav => fav.idMeal !== meal.idMeal));
      } else {
        setFavorites([...favorites, meal]);
      }
    };
  
    return (
      <div className="p-d-flex p-jc-center p-mt-5">
        <div className="p-col-10 p-md-6">
          {meals.map(meal => (
            <Card key={meal.idMeal} className="p-mb-3">
              <div className="p-d-flex p-jc-between p-ai-center">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="p-mr-2" width="50" />
                <p>{meal.strMeal}</p>
                <Button 
                  icon={favorites.some(fav => fav.idMeal === meal.idMeal) ? 'pi pi-heart-fill' : 'pi pi-heart'} 
                  className={favorites.some(fav => fav.idMeal === meal.idMeal) ? 'p-button-danger' : 'p-button-secondary'} 
                  onClick={() => toggleFavorite(meal)}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default Meals;
  

