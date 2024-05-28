import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => setCategories(response.data.categories));
  }, []);

  return (
    <div className="p-d-flex p-jc-center p-mt-5 ">
      <Panel header="Menu" className="p-col-10 p-md-6">
        <div className="p-grid p-justify-center menu ">
          {categories.map(category => (
            <Link to={`/meals/${category.strCategory}`} key={category.idCategory} className="p-col-12 p-md-6 p-mb-2">
              <Button label={category.strCategory} className="p-button-outlined p-button-secondary p-button-rounded" />
            </Link>
          ))}
        </div>
      </Panel>
    </div>
  );
};

export default Menu;
