import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems/MenuItems';
import MenuCategories from './MenuCategories/MenuCategories';
import { Link } from 'react-router-dom';
import Pagination from '../shared/Pagination/Pagination';

const Menu = ({ numberOfItemsToShow }) => {
  const [menuData, setMenuData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const [categories, setCategories] = useState([]);
  const [paginationLoading, setPaginationLoading] = useState(false); // Add paginationLoading state


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

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(menuData.length / itemsPerPage);

  const handlePageChange =async (pageNumber) => {
    setPaginationLoading(true); // Set pagination loading to true
    await setCurrentPage(pageNumber);
    setPaginationLoading(false); // Set pagination loading to false after updating page

  };

  return (
    <div className='py-5'>
      <h1 className='text-center text-5xl'>Our Menu</h1>

      <div className="my-3">
        <ul className="menu menu-horizontal gap-2 rounded-box flex justify-center m-auto">
          {loading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            <>
              <div className="font-semibold">
                <li className=''><Link className='btn btn-sm btn-warning btn-outline' onClick={() => handleCategorySelect('All')}>All</Link></li>
              </div>
              {/* Menu Category */}
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

      {loading || filtering || paginationLoading ? (
        <div className="text-center">
          <span className="loading loading-ball loading-lg"></span>
        </div>
      ) : (
        // Menu Items
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {currentItems.map(menuItem => (
            <MenuItems
              key={menuItem.id}
              menuItem={menuItem}
            />
          ))}
        </div>
      )}


      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Menu;
