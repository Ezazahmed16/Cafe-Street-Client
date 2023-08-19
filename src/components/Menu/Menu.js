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
  const [paginationLoading, setPaginationLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('FoodMenu.JSON').then(response => response.json()),
      fetch('FoodCategories.JSON').then(response => response.json())
    ])
      .then(([menuData, categoriesData]) => {
        setMenuData(menuData);
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMenuData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredMenuData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setPaginationLoading(true);
    setCurrentPage(pageNumber);
    setPaginationLoading(false);
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
                <li><Link className='btn btn-sm btn-warning btn-outline' onClick={() => handleCategorySelect('All')}>All</Link></li>
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

      {loading || filtering || paginationLoading ? (
        <div className="text-center">
          <span className="loading loading-ball loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {currentItems.map(menuItem => (
            <MenuItems
              key={menuItem.id}
              menuItem={menuItem}
            />
          ))}
        </div>
      )}

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
