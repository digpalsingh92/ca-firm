// Desc: Layout component that wraps the Navbar and children components
import React from 'react';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {  
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;