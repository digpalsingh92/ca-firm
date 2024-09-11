import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Accounting from "./pages/ServicesPages/Accounting";
import Auditing from "./pages/ServicesPages/Auditing";
import CompanyLaw from "./pages/ServicesPages/CompanyLaw";
import ForeignCollaboratives from "./pages/ServicesPages/ForeignCollaboratives";
import GST from "./pages/ServicesPages/GST";
import IncomeTax from "./pages/ServicesPages/IncomeTax";
import NGOs from "./pages/ServicesPages/NGOs";
import StartupServices from "./pages/ServicesPages/StartupServices";
import ImportExportConsultancy from "./pages/ServicesPages/ImportExportConsultancy";
import BPOs from "./pages/ServicesPages/BPOs";
import Finance from "./pages/ServicesPages/Finance";
import Career from "./pages/Career";
import Overview from "./pages/About/Overview";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/accounting" element={<Accounting />} />
          <Route path="/services/auditing-assurance" element={<Auditing />} />
          <Route path="/services/income-tax" element={<IncomeTax />} />
          <Route path="/services/gst" element={<GST />} />
          <Route path="/services/company-law-matters" element={<CompanyLaw />} />
          <Route path="/services/bpo" element={<BPOs />} />
          <Route path="/services/finance" element={<Finance />} />
          <Route path="/services/foreign-collaborations-services" element={<ForeignCollaboratives />} />
          <Route path="/services/trust-ngo" element={<NGOs />} />
          <Route path="/services/startup-services" element={<StartupServices />} />
          <Route path="/services/import-export-consultancy" element={<ImportExportConsultancy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Layout>
    </Router>
  );
}
