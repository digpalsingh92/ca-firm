import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Accounting from "./Pages/ServicesPages/Accounting";
import Auditing from "./Pages/ServicesPages/Auditing";
import CompanyLaw from "./Pages/ServicesPages/CompanyLaw";
import ForeignCollaboratives from "./Pages/ServicesPages/ForeignCollaboratives";
import GST from "./Pages/ServicesPages/GST";
import IncomeTax from "./Pages/ServicesPages/IncomeTax";
import NGOs from "./Pages/ServicesPages/NGOs";
import StartupServices from "./Pages/ServicesPages/StartupServices";
import ImportExportConsultancy from "./Pages/ServicesPages/ImportExportConsultancy";
import BPOs from "./Pages/ServicesPages/BPOs";
import Finance from "./Pages/ServicesPages/Finance";
import Career from "./Pages/Career";

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
          <Route path="/our-team/staffs" element={<Team />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Layout>
    </Router>
  );
}
