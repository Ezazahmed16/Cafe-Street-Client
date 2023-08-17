import React from 'react';
import { Link } from 'react-router-dom';

const MenuCategories = ({ menuItem, onSelect }) => {
  return (
    <div className='font-semibold'>
      <li>
        <Link className='btn btn-sm btn-warning btn-outline' onClick={() => onSelect(menuItem.id)}>{menuItem.category}</Link>
      </li>
    </div>
  )
}

export default MenuCategories;
