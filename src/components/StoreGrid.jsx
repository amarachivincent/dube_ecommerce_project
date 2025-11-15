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

  // Function to generate Google Maps embed URL
  const getMapEmbedUrl = (latitude, longitude) => {
    if (!latitude || !longitude) {
      return "about:blank";
    }
    return `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  };

 return (
 <section className="">
 <div className="store-grid container-fluid home-page-layout">
 <div className="row home-content-scrollable">
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
 <div className="modal-body store-grid-modal-body py-0">
 
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
 src={getMapEmbedUrl(selectedStore.latitude, selectedStore.longitude)}
 style={{ border: 0 }}
 allowFullScreen=""
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
                     title={`Map of ${selectedStore.title} store`}
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