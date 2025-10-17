import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TermPage from "./pages/TermPage";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/ContactPage";
import FinancialAdvisory from "./pages/FinancialAdvisory";
import InvestmentServices from "./pages/InvestmentServices";
import TaxAccounting from "./pages/TaxAccounting";
import MonteCarloForm from "./pages/MonteCarloForm";

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "#0a0f1a", minHeight: "100vh" }}>
        <Header />
        <main style={{ backgroundColor: "transparent" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/term" element={<TermPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/financial-advisory" element={<FinancialAdvisory />} />
            <Route
              path="/investment-services"
              element={<InvestmentServices />}
            />
            <Route path="/tax-accounting" element={<TaxAccounting />} />
            <Route path="/monte-carlo" element={<MonteCarloForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
