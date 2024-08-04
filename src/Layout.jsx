// // Desc: Layout component that wraps the Navbar and children components

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
