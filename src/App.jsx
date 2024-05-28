// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Menu from './components/Menu';
import Meals from './components/Meals';
import FavouriteMeals from './components/FavouriteMeals';
import RandomMealGenerator from './components/RandomMealGenerator';
import AboutMe from './components/AboutMe';
import { FavoritesProvider } from './Context/FavoritesContext';
import Routes from './Routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/meals/:category",
        element: <Meals />,
      },
      {
        path: "/favourites",
        element: <FavouriteMeals />,
      },
      {
        path: "/meal-generator",
        element: <RandomMealGenerator />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
    ],
  },
]);

const App = () => {
  return (
    <FavoritesProvider>
    <Routes />
  </FavoritesProvider>
  );
};

export default App;
