import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import { FavoritesProvider } from './Context/FavoritesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
  <Routes />
</FavoritesProvider>
);
