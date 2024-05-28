import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
    { label: 'Menu', icon: 'pi pi-fw pi-list', command: () => navigate('/menu') },
    { label: 'My Favourites', icon: 'pi pi-fw pi-heart', command: () => navigate('/favourites') },
    { label: 'Meal Generator', icon: 'pi pi-fw pi-random', command: () => navigate('/meal-generator') },
    { label: 'About Me', icon: 'pi pi-fw pi-user', command: () => navigate('/about-me') },
  ];

  const handleItemClick = (command) => {
    command();
    setVisible(false); // Close the sidebar after clicking a menu item
  };

  return (
    <div>
      <Menubar
        model={items}
        start={<Button icon="pi pi-bars" className="p-button-text" onClick={() => setVisible(true)} />}
      />
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <ul className='list-none'>
          {items.map((item, index) => (
            <li key={index} className='text-white-50 bg-transparent-50'>
              <Button 
                label={item.label} 
                icon={item.icon} 
                className="p-button-link btn text-white-50 bg-transparent-50" 
                onClick={() => handleItemClick(item.command)} 
              />
            </li>
          ))}
        </ul>
      </Sidebar>
    </div>
  );
};

export default NavigationBar;
