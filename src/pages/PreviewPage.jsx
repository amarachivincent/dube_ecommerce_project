// src/pages/PreviewPage.jsx
import React from 'react';
import {Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

const PreviewPage = ({ stores, getTimer }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelectStore = (storeId) => {
    navigate(`/details/${storeId}`); // Navigate to the new details page with the store ID
  };

  return (
    <>
      <PageHeader title="Dube" date={getTimer()} />
      <section className="preview-grid preview-page-frame">
        <section className="home-page-layout">
          <div className="preview-grid container-fluid home-content-scrollable d-flex">
            <div className="row">
              {stores.map((store) => (
                <div key={store.id} className="col-sm-3 col-md-2 col-lg-2 card-frame no-gutters">
                  <div
                    className="card"
                    // Call the navigate function with the store's ID
                    onClick={() => handleSelectStore(store.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={`images/${store.image}`}
                  
                      className="store-image"
                      alt={`${store.title} store`}
                    />
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="home-page-layout d-flex w-100">
          <div className="card-info-inner w-100">
            <hr style={{ margin: '1em 0' }} />
          </div>
        </section>
        <section className="home-page-layout">
          <div className="preview-grid container-fluid home-content-scrollable d-flex">
            <div className='row w-100'>
              <div className='col-sm-12 w-100 d-flex gx-0'>
                <span className="card-header-inner w-100">
                  <span className="card-header-info py-0">
                    <Link to="/all">view all</Link></span>
                  <span className="card-header-info card-info-inner py-0">lookbook</span>
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