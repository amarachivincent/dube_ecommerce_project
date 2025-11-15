// src/pages/PreviewPage.jsx
import React from 'react';
import {Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

const PreviewPage = ({ products, getTimer }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelectStore = (productId) => {
    navigate(`/details/${productId}`); // Navigate to the new details page with the store ID
  };

  return (
    <>
      <PageHeader title="Dube" date={getTimer()} />
      <section className="preview-grid-frame">
        <section className="preview-grid home-page-layout d-flex">
            <div className="row home-content-scrollable">
              {products.map((product) => (
                <div key={product.product_id} className="col-sm-3 col-md-2 col-lg-2 card-frame no-gutters">
                  <div
                    className="card"
                    // Call the navigate function with the store's ID
                    onClick={() => handleSelectStore(product.product_id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={`images/${product.thumbnail}`}
                  
                      className="store-image"
                      alt={`${product.title} store`}
                    />
                  
                  </div>
                </div>
              ))}
            </div>
         
        </section>
        <section className="preview-grid-header   d-flex w-100 mb-0 gx-0 px-0">
          <div className="card-info-inner w-100">
            <hr style={{ marginTop: '0.5em' }} />
          </div>
        </section>
        <section className="">
          <div className="preview-grid container-fluid d-flex">
            <div className='row w-100'>
              <div className='col-sm-12 w-100 d-flex gx-0'>
                <span className="card-header-inner d-flex align-items-center w-100">
                 
                  <span className="card-header-info card-info-inner py-0" >
                    {/*<a href="#">lookbook</a>*/}
                    
                    </span>
                     <span className="card-header-info">
                    <Link to="/all">view all</Link></span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
      <PageFooter />
    </>
  );
};

export default PreviewPage;