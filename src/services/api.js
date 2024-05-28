import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/categories.php`);
  return response.data.categories;
};

export const fetchMealsByCategory = async (category) => {
  const response = await axios.get(`${API_URL}/filter.php?c=${category}`);
  return response.data.meals;
};

export const fetchRandomMeal = async () => {
  const response = await axios.get(`${API_URL}/random.php`);
  return response.data.meals[0];
};
