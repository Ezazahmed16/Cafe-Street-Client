import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems/MenuItems';
import MenuCategories from './MenuCategories/MenuCategories';
import { Link } from 'react-router-dom';

const Menu = ({numberOfItemsToShow}) => {
  const [menuData, setMenuData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('FoodMenu.JSON')
      .then(response => response.json())
      .then(data => {
        setMenuData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
        setLoading(false);
      });

    // Fetch category data when the component mounts
    fetch('FoodCategories.JSON')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories data:', error);
      });
  }, []);

  const handleCategorySelect = (category) => {
    setFiltering(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setFiltering(false);
    }, 500);
  };

  const filteredMenuData = selectedCategory === 'All'
    ? menuData
    : menuData.filter(item => item.category_id === selectedCategory);

  return (
    <div className='py-5'>
      <h1 className='text-center text-5xl'>Our Menu</h1>

      <div className="my-3">
        <ul className="menu menu-horizontal gap-2 rounded-box flex justify-center m-auto">
          {loading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            <>
              <div className="font-semibold btn btn-warning btn-outline">
                <li><Link onClick={() => handleCategorySelect('All')}>All</Link></li>
              </div>
              {categories.map(category => (
                <MenuCategories
                  key={category.id}
                  menuItem={category}
                  onSelect={handleCategorySelect}
                />
              ))}
            </>
          )}
        </ul>
      </div>

      {loading || filtering ? (
        <div className="text-center">
          <span className="loading loading-ball loading-lg"></span>
        </div>
      ) : (
        // Menu Items
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredMenuData.slice(0, numberOfItemsToShow).map(menuItem => (
            <MenuItems
              key={menuItem.id}
              menuItem={menuItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
