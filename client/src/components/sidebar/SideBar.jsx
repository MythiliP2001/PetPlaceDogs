import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <nav>
        <NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink>
        <NavLink to="/products" activeClassName="active-link">Products</NavLink>
        <NavLink to="/orders" activeClassName="active-link">Orders</NavLink>
        <NavLink to="/users" activeClassName="active-link">Users</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
