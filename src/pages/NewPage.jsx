// src/pages/AboutPage.jsx
import React from 'react';
import PageHeader from '../components/PageHeader'; // Use the specific header for this page

import PageFooter from '../components/PageFooter';

const NewPage = ({getTimer,stores}) => {
  return (
    <>
      <PageHeader title="Dube"  date={getTimer()} /> {/* Specific header for stores */}
       <div className="new-grid container-fluid">
         <div className="row">
            <div className="col-sm-12">
               
            </div>
         </div>
      </div>
           
      <PageFooter />
    </>
  );
};

export default NewPage;

