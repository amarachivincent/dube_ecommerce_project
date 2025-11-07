// src/pages/AboutPage.jsx
import React from 'react';
import PageHeader from '../components/PageHeader'; // Use the specific header for this page

import PageFooter from '../components/PageFooter';

const AboutPage = ({getTimer}) => {
  return (
    <>
      <PageHeader title="Dube"   date={getTimer()} /> {/* Specific header for stores */}
      <div className="container-fluid page-grid">
         <div className="row">
            <div className="col-sm-12">
             <div>
              <h4>About</h4>
                <p>
                   At <strong>Dube, </strong>we believe pets deserve the very best. As a <strong>Canadian pet care brand,</strong>we take full control of every step - <strong>from product design to manufacturing to delivery </strong>- ensuring <strong>world-class quality and safety standards</strong> for every pet product we create.<br/><br/>
                   We don't resell or repackage - <strong>we build, test, and perfect </strong>every item ourselves. This commitment has made Dube a <strong>trusted name in Canada</strong> and a <strong>growing global choice</strong> for families who want only the highest-quality care for their pets.
                
                  </p>
            </div>
            </div>
         </div>
      </div>
      <PageFooter />
    </>
  );
};

export default AboutPage;

