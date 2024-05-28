import React, { useContext } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavouriteMeals = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  if (!favorites || !setFavorites) {
    console.error('FavoritesContext is not provided!');
    return (
      <div className="p-d-flex p-jc-center p-mt-5">
        <div className="p-col-10 p-md-6">
          <div className="p-text-center">
            <div>Error: FavoritesContext is not provided!</div>
            <div><h4 className=''>Please add some favorites first.</h4></div>
          </div>
        </div>
      </div>
    );
  }

  const removeFavorite = meal => {
    setFavorites(favorites.filter(fav => fav.idMeal !== meal.idMeal));
  };

  return (
    <div className="p-d-flex p-jc-center p-mt-5">
      <div className="p-col-10 p-md-6">
        {favorites.length === 0 && (
          <div className="p-text-center p-mb-3 p-text-center text-2xl "> <h4>
            No favorite meals added yet. Add some favorites first! .</h4>
          </div>
        )}
        {favorites.map(meal => (
          <Card key={meal.idMeal} className="p-mb-3">
            <div className="p-d-flex p-jc-between p-ai-center">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="p-mr-2" width="50" />
              <p>{meal.strMeal}</p>
              <Button 
                icon="pi pi-times" 
                className="p-button-danger" 
                onClick={() => removeFavorite(meal)}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FavouriteMeals;
