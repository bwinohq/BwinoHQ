import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EarlyAccess from "../pages/EarlyAccess";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import { AnimatePresence } from "framer-motion";
import RedirectPage from "../pages/RedirectPage";

const Routers = () => {

  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Routes>
          <Route path="/" element={<RedirectPage />}/>
          <Route path="/early-access" element={<EarlyAccess />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
};

export default Routers;
