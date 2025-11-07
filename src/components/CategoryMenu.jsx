// src/components/CategoryMenu.jsx
import React, { useState } from 'react';
import '../pages/AllPage.css';

const categories = [ 'food', 'treats','play gear','grooming','essentials', 'health care','toys'];

const CategoryMenu = ({ selectedCategory, onSelectCategory }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="category-menu-container w-100" style={{position:'relative'}}>
            {/* Dropdown button for medium and smaller screens */}
            <div className="d-lg-none d-flex justify-content-between align-items-center">
                <h5 className="category-h5 fw-bold mb-0">all</h5>
                <button 
                    className="btn btn-outline-none d-flex align-items-center"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                >
                    {/*<span className="me-2">Menu</span>*/}
                    <span className={`caret-icon ${isMenuOpen ? 'up' : 'down'}`}  onClick={toggleMenu}
                    aria-expanded={isMenuOpen}></span>
                </button>
            </div>

            {/* Menu list, visible by default on large screens, toggled on others */}
            <div className={`category-menu-list p-3 ${isMenuOpen ? 'd-block' : 'd-none d-lg-block'}`} style={{position:'absolute', width:'100%', background:'white',zIndex:'1000'}}>
               
                <ul className="list-unstyled d-flex flex-wrap flex-lg-column row-cols-2 row-cols-lg-1" >
                    {categories.map((category, index) => (
                        <li key={index} className="py-1 col-6 col-lg-12">
                            <a
                                href="#"
                                className={`text-decoration-none  ${selectedCategory === category ? 'fw-bold' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSelectCategory(category);
                                    setIsMenuOpen(false); // Close menu on mobile after selection
                                }}
                            >
                                {category}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryMenu;