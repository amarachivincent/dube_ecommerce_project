// src/pages/AboutPage.jsx
import React from 'react';
import PageHeader from '../components/PageHeader'; // Use the specific header for this page

import PageFooter from '../components/PageFooter';

const SubscribePage = ({getTimer}) => {
  return (
    <>
      <PageHeader title="Dube"   date={getTimer()}/> {/* Specific header for stores */}
       <div className="subscribe-grid container-fluid">
         <div className="row">
            <div className="col-sm-12">
             <div>
               <form>
                
            
            
                
                <div>Add my email to your mailing list</div>
               
                 <div>
                  
                    <input type="text" placeholder="your email"/>
                  
                 </div>
                  <div>I understand that i can opt out any time</div>
                 <div>
                  
                 <button >subscribe</button>

                  
                 </div>
         
         
                 
           </form>    
            </div>
            </div>
         </div>
      </div>
           
      <PageFooter />
    </>
  );
};

export default SubscribePage;

