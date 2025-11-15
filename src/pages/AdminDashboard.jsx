import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import StoreManager from '../components/admin/StoreManager';
import NewsManager from '../components/admin/NewsManager';
import ProductManager from '../components/admin/ProductManager';
import CategoryManager from '../components/admin/CategoryManager';
//import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [activeTable, setActiveTable] = useState('stores');

  const renderManager = () => {
    switch (activeTable) {
      case 'stores':
        return <StoreManager />;
      case 'news':
        return <NewsManager />;
      case 'products':
        return <ProductManager />;
      case 'categories':
        return <CategoryManager />;
      default:
        return <div>Select a table to manage.</div>;
    }
  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-light p-3 border-end" style={{ width: '250px' }}>
       
        <h4 className="mb-4">Admin Panel</h4>
        <ul className="nav flex-column">
        <li className="nav-item">
            <Link to="/" className={`nav-link btn btn-block text-start `}>
              View Site
            </Link>
          </li>
          <li className="nav-item">
            <button className={`nav-link btn btn-block text-start ${activeTable === 'stores' ? 'active' : ''}`} onClick={() => setActiveTable('stores')}>
              Manage Stores
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link btn btn-block text-start ${activeTable === 'news' ? 'active' : ''}`} onClick={() => setActiveTable('news')}>
              Manage News
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link btn btn-block text-start ${activeTable === 'products' ? 'active' : ''}`} onClick={() => setActiveTable('products')}>
              Manage Products
            </button>
          </li>
         <li className="nav-item">
            <button className={`nav-link btn btn-block text-start ${activeTable === 'categories' ? 'active' : ''}`} onClick={() => setActiveTable('categories')}>
              Manage Categories
            </button>
          </li>        
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-4">
        {renderManager()}
      </div>
    </div>
  );
};

export default AdminDashboard;