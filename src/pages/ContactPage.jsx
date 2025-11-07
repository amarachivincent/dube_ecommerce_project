// src/pages/AboutPage.jsx
import React from 'react';
import PageHeader from '../components/PageHeader'; // Use the specific header for this page

import PageFooter from '../components/PageFooter';

const ContactPage = ({getTimer}) => {
  return (
    <>
      <PageHeader title="Dube"  date={getTimer()} /> {/* Specific header for stores */}
       <div className="contact-grid container-fluid">
         <div className="row">
            <div className="col-sm-12">
             <div>
               <form>
                <h4>Contact Dube</h4>
                <div className="person-info">
                  <input type="text" placeholder="first name" />
    
                  <input type="text" placeholder="last name" />

                </div>
              
                <div className="person-info">
                  
                 <input type="text" placeholder="last name" />

                  
                  
                  <input type="text" placeholder="your mail" />

                
                </div>
             
                
                <div>
                  
                    <input type="text" placeholder="order number"/>
                  
                </div>
               <div>
                  
                  <select style={{background:'white', padding:'1.2em', border:'thin solid #aaa'}}>
                    <option value="">online order status requests</option>
                    <option value="">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                 </select>
                 
                  
               
                </div>
                 <div>
                  
                 <textarea placeholder="message" rows="6"></textarea>
                  
                 </div>
                 <div>
                  
                 <button >send</button>

                  
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

export default ContactPage;

