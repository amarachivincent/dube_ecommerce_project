// src/pages/StoresPage.jsx
import React from 'react';
import PageHeader from '../components/PageHeader'; // Use the specific header for this page
import StoreGrid from '../components/StoreGrid';
import PageFooter from '../components/PageFooter';


const StoresPage = ({ stores, getTimer}) => {
  
  return (
    <>
      <div className="container-fluid wrapper">
      <PageHeader title="Dube"  date={getTimer()} /> {/* Specific header for stores */}
        <br/>
        <StoreGrid stores={stores} />
      </div>
      <PageFooter />
    </>
  );
};

export default StoresPage;