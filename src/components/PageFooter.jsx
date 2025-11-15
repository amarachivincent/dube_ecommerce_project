import React from 'react';
import { Link } from 'react-router-dom';

const PageFooter = () => {
  return (
    <footer className="page-footer"> 
      <div className="container-fluid footer-main-container-fluid"  >

        {/* New Row 1A: Displays ONLY on large screens (lg and up) */}
        {/* Two items, centered, with minimal horizontal padding */}
        <div className="row footer-row-1a gx-0 d-none d-md-flex page-outer">
          <div className="col-auto text-center px-0"> {/* Added ms-4 for spacing */}
            <Link to="/preview">shop</Link>
          </div>
         
           <div className="col-auto text-center px-0">
            <Link to="/preview">spring/summer 2025 preview</Link>&nbsp;&nbsp;&nbsp;
            {/*<Link to="/">lookbook </Link>*/}
            &nbsp;&nbsp;&nbsp;
            <Link to="/news">news </Link>
          </div>
        </div>

        {/* Original Row 1 (now Row 1B): Displays on Medium and Smaller screens (md and down) */}
        {/* Changed to justify-content-around for space around items */}
        <div className="row footer-row-1b gx-0 d-md-none justify-content-around page-inner"  > {/* Added justify-content-around */}
          <div className="col-4 text-center px-0">
            <Link to="preview">shop</Link>
          </div>
          <div className="col-4 text-center px-0">
            <Link to="/preview">preview</Link>
          </div>
          {/* Item 3 *
          <div className="col-3 text-center px-0">
            <Link to="/">lookbook</Link>
          </div>
          {/* Item 4 */}
          <div className="col-4 text-center px-0">
            <Link to="/news">news</Link>
          </div>
        </div>

        {/* Row 2: Three main columns with specific responsive behavior */}
        {/* Changed to justify-content-between to push items to extremes */}
        <div className="row footer-row-2 px-0 page-middle d-flex justify-content-center" > {/* Added justify-content-between */}
          {/* Column 1 */}
          <div className="col-6 col-sm-4 col-md-4 col-lg-4">
            {/* Nested row for internal items */}
            {/* On XS/SM: col-4 (horizontal). On MD/LG: col-md-12 (vertical stacking). */}
            <div className="row no-gutters footer-column-inner-row">
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/stores">stores</Link>
              </div>
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/">random</Link>
              </div>
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/">f.a.q.</Link>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-6 col-sm-4 col-md-4 col-lg-4">
            {/* Nested row for internal items */}
            <div className="row no-gutters footer-column-inner-row ">
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/about">about</Link>
              </div>
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/contact">contact</Link>
              </div>
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/mail">mailing</Link>
              </div>
            </div>
          </div>

          {/* Forces a new line for Column 3, but ONLY on extra-small screens */}
          <div className="w-100 d-block d-sm-none py-2"></div>

          {/* Column 3 - COMPANY section - Centered on all screen sizes */}
          <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-start d-flex justify-content-center">
            {/* Nested row for internal items */}
            <div className="row footer-column-inner-row-inner">
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/">terms </Link>
              </div>
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/">privacy</Link>
              </div>
              <div className="col-4 col-md-12 col-lg-12">
                <Link to="/">disclaimer</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Single item (Full Site link) - Centered on all screen sizes */}
        <div className="row footer-row-3 align-items-center d-md-none text-decoration-underline">
          {/* Full Site Link - Now takes full width and is centered */}
          <div className="col-12 text-center">
            <Link to="/">full site</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default PageFooter;