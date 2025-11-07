import React from 'react';

const Footer = () => {
  return (
    
    <footer className="home-footer"> {/* Dark background, 50% opacity white text, vertical padding, auto top margin to push to bottom, red top border */}
      <div className="home-footer container-fluid "> {/* Container, flex for arrangement, column on small screens, row on medium+, justify around, align items center */}
        <div className="row">
         <div className="col-sm-12">
        <div className="footer-inner fixed-bottom">
        <div className="nav"> {/* Flex column for links, bottom margin on small screens, no bottom margin on medium+ */}


          
          <a href="#terms" className="">terms</a> {/* No text decoration, white text, light link color, bottom margin */}
          <a href="#privacy" className="">privacy</a>
          <a href="#faq" className="">faq</a>
       
        </div>
        </div>
        </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;