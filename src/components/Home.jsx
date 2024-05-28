import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="p-d-flex p-jc-center p-mt-5">
    <Card title="Home Page" className="p-col-12 p-md-6">
      <div className="p-d-flex p-jc-center p-mt-3">
        <Link to="/menu" className="p-mr-2">
          <Button label="Menu" className="p-button-raised p-button-rounded" />
        </Link>
        <Link to="/favourites" className="p-mr-2">
          <Button label="Favorites" className="p-button-raised p-button-rounded" />
        </Link>
        <Link to="/meal-generator">
          <Button label="Random Meal" className="p-button-raised p-button-rounded" />
        </Link>
      </div>
    </Card>
  </div>
);

export default Home;
