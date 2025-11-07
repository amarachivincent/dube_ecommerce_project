import React, { useState, useEffect } from 'react';
import './StoreGridModal.css';

const StoreGrid = ({ stores }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [userClosedModal, setUserClosedModal] = useState(false);

  const smallScreenBreakpoint = 768;

  const openModal = (store) => {
    if (window.innerWidth < smallScreenBreakpoint) {
      console.log("Modal cannot be opened on small screens.");
      return;
    }
    
    setSelectedStore(store);
    setShowModal(true);
    setUserClosedModal(false);
  };

  const closeModal = (isUserInitiated = false) => {
    setShowModal(false);
    if (isUserInitiated) {
      setUserClosedModal(true);
    }
  };

  useEffect(() => {
    let lastKnownWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      
      if (showModal) {
        if (currentWidth < smallScreenBreakpoint) {
          closeModal();
        }
      }
      
      if (lastKnownWidth < smallScreenBreakpoint && currentWidth >= smallScreenBreakpoint) {
        if (!showModal && !userClosedModal && selectedStore) {
          openModal(selectedStore);
        }
      }
      lastKnownWidth = currentWidth;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showModal, userClosedModal, selectedStore]);

  return (
    <section className="home-page-layout">
      <div className="store-grid container-fluid home-content-scrollable">
        <div className="row">
          {stores.map((store) => (
            <div key={store.id} className="col-md-3 gx-2 py-1">
              <div 
                className="card" 
                onClick={() => openModal(store)}
                style={{ cursor: 'pointer'}}
              >
                <div className="card-header">
                  <span>
                    <strong>{store.type}</strong>
                    <span className="card-header-info">{store.description}</span>
                    <span className="card-header-info">{store.city}</span>
                    <span className="card-header-info">{store.date}</span>
                  </span>
                </div>
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

      {showModal && selectedStore && (
        <div
          className="modal fade show store-grid-modal-backdrop"
          tabIndex="-1"
          onClick={() => closeModal(true)}
        >
          <div 
            className="modal-dialog modal-dialog-centered modal-lg store-grid-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content store-grid-modal-content">
              <div className="modal-body store-grid-modal-body">
                
                {/* LEFT SECTION */}
                <div className="store-grid-modal-left-section">
                  <p>{selectedStore.type}</p>
                  <p>{selectedStore.description}</p>
                  <p>{selectedStore.title}</p>
                  <p>{selectedStore.date}</p>
                </div>
                
                <div className="store-grid-modal-image-and-map-container">
                    
                  {/* MIDDLE SECTION: Three Images */}
                  <div className="store-grid-modal-middle-section">
                    {/* First Image (Full Height) */}
                    <div className="middle-section-main-image">
                      <img
                        src={`images/${selectedStore.image}`}
                        alt={`${selectedStore.title} store preview`}
                        className="img-fluid"
                      />
                    </div>

                    {/* Container for the last two images in a row */}
                    <div className="middle-section-row-images">
                      <div className="middle-section-row-image">
                        <img
                          src={`images/${selectedStore.image}`}
                          alt={`${selectedStore.title} store preview - 2`}
                          className="img-fluid store-grid-modal-image-row"
                        />
                      </div>
                      <div className="middle-section-row-image">
                        <img
                          src={`images/${selectedStore.image}`}
                          alt={`${selectedStore.title} store preview - 3`}
                          className="img-fluid store-grid-modal-image-row"
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SECTION (map) */}
                  <div className="store-grid-modal-right-section">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3312151745267!2d3.393082575971485!3d6.471675793505701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b15d2a8b357%3A0xc47e30d1e57c1e7a!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1628178929000!5m2!1sen!2sus"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StoreGrid;