// Desc: Layout component that wraps the Navbar and children components

import Navbar from "./Components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
