import React from 'react';
import {Link} from 'react-router-dom';


const PageHeader = ({ sub, title, date }) => {
  return (

    <header className="navbar"> {/* Dark background, light text, info-colored bottom border */}
      <div className="container-fluid page-header  fixed-top"> {/* Fluid container for full width */}
        <span className="navbar-brand"> {/* Brand text, h1 for semantic, no bottom margin, fs-2 for font size, fw-bold for bold, text-uppercase */}
         <Link to="/"> {title}</Link>
        </span>
        <span className="navbar-text"> {/* Text, auto margin left to push right, light text, 75% opacity */}
          {date}
        </span>
      </div>
    </header>
    
  );
};

export default PageHeader;