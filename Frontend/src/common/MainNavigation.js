import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import NavLinks from './NavLinks';




const MainNavigation = props => {
  

  return (
  
    <div>
        
  <Header/>
 <NavLinks />
    
   </div>  
  
  );
};

export default MainNavigation;