import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import clx from 'classnames';
import './SideMenu.scss';
import { MdOutlineGridView } from 'react-icons/md';

const SideMenu: FC = () => {
  return (
    <nav className="SideMenu--nav">
      <NavLink
        to="/dashboard"
        className={(navData) => (navData.isActive ? clx('SideMenu--item', 'SideMenu--item-active') : 'SideMenu--item')}
      >
        <MdOutlineGridView className="SideMenu--item-icon" /> <span className="SideMenu--item-text">Dashboard</span>
      </NavLink>
    </nav>
  );
};

export default SideMenu;
