import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useScrollToTop from './hooks/useScrollToTop';
import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header'
import Promo from './components/promo/Promo';
import Payday from './components/payday/Payday';
import Youngs from './components/youngs/Youngs';
import Download from './components/download/Download';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy';
import TermsAndConditions from './components/terms-and-conditions/TermsAndConditions';

function App() {

  function ScrollHookWrapper() { useScrollToTop(); return null }

  return (
    	<Router>
      <ScrollHookWrapper />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Promo />
            <Brands />
            <Arrivals />
            <Payday />
            <Youngs />
            <Download />
            <Join />
            <Footer />
          </div>
        } />
        <Route path="/terms-and-conditions" element={
          <><Header />
          <TermsAndConditions />
          <Footer /></>
        } />
        <Route path="/privacy-policy" element={
          <><Header />
          <PrivacyPolicy />
          <Footer /></>
        } />
      </Routes>
    </Router>
  );
}

export default App;
