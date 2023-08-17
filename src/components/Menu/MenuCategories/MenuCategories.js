import React from 'react';
import { Link } from 'react-router-dom';

const MenuCategories = ({ menuItem, onSelect }) => {
  return (
    <div className='font-semibold btn btn-warning btn-outline'>
      <li>
        <Link onClick={() => onSelect(menuItem.id)}>{menuItem.category}</Link>
      </li>
    </div>
  );
}

export default MenuCategories;
