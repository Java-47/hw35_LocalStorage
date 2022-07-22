import React from 'react';
import { navItems } from '../utils/constants';
import NavItem from './NavItem';

const Navigation = ({changePage}) => {
  return (
    <nav className="fixed-top mt-2 ms-4">
      <ul className="nav">
        {navItems.map(item => <NavItem changePage={changePage} key={item} itemTitle={item} />)}
      </ul>
    </nav>
  )
}

export default Navigation