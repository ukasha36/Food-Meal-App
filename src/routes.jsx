// src/Routes.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Menu from './components/Menu';
import Meals from './components/Meals';
import FavouriteMeals from './components/FavouriteMeals';
import RandomMealGenerator from './components/RandomMealGenerator';
import AboutMe from './components/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/meals/:category", element: <Meals /> },
      { path: "/favourites", element: <FavouriteMeals /> },
      { path: "/meal-generator", element: <RandomMealGenerator /> },
      { path: "/about-me", element: <AboutMe /> },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
