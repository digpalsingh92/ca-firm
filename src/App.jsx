import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/overview" element={<About />} />
          <Route path="/about/journey-milestones" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/accounting" element={<Services />} />
          <Route path="/services/auditing-assurance" element={<Services />} />
          <Route path="/services/income-tax" element={<Services />} />
          <Route path="/services/gst" element={<Services />} />
          <Route path="/services/company-law-matters" element={<Services />} />
          <Route path="/services/gst" element={<Services />} />
          <Route path="/services/gst" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/our-team/staffs" element={<Team />} />
        </Routes>
      </Layout>
    </Router>
  );
}
