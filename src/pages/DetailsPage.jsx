// src/pages/PreviewPage.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link, useParams, useNavigate } from 'react-router-dom';


const DetailsPage = ({ products,getTimer}) => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const selectedProduct = products.find(product => product.product_id === productId);

    if (!selectedProduct) {
        return <div>Product not found.</div>;
    }
    
    // Placeholder for total images and current image number
    const totalImages = products.length;
    const currentImageIndex = products.findIndex(product => product.product_id === productId);
    const currentImageNumber = currentImageIndex !== -1 ? currentImageIndex + 1 : 1;

    return (
    <>
      
        <section className="details-grid">
          <div className=" container-fluid">
             <div className="row">
                <div className="col-sm-12  d-md-none">
                
                      <PageHeader title="Dube" date={getTimer()} />
                </div>
            
              </div>

              <div className="row flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="col-sm-12 text-center">
                   { <img
                        src={`../images/${selectedProduct.image}`}
                        alt={`${selectedProduct.title} store`}
                        className="img-fluid"
                    />}
                </div>
              </div>
            <div className="row d-flex align-items-start justify-content-around pt-4">
                {/* Column 1: Logo/Type */}
                <div className="col-sm-2 col-md-2 d-none d-md-flex py-3" >
                    <div className="fw-bold fs-5 text-center">
                        {/*selectedStore.type*/}
                        <Link to="/" className="navbar-brand-details">Dube</Link>
                    </div>
                </div>

                {/* Column 2: Description */}
                <div className="col-md-8 text-start d-middle" >
                  <div>
                    <p className="mb-0"><strong>{selectedProduct.title}</strong></p>
                    <p className="mb-0">{selectedProduct.description}</p>
                    <p className="mb-0">{selectedProduct.title}</p>
                  </div>
                    
                     <div className=" text-end w-50">
                        {currentImageNumber} of {totalImages}
                    </div>
                </div>

                {/* Column 3: Back Button and Image Counter */}
                <div className="col-md-2 d-none d-md-flex d-right" >

                    <button 
                        onClick={() => navigate(-1)} 
                        className="details-btn">
                      back
                    </button>
                  
                </div>
            </div>

          </div>
        </section>
      
       

    </>
  );
};

export default DetailsPage;