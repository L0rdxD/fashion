import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header'
import Promo from './components/promo/Promo';
import Payday from './components/payday/Payday';
import Youngs from './components/youngs/Youngs';
import Downloade from './components/download/Download';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';
import PrivacyPolicy from './components/privacy-policy/privacy-policy';

function App() {

  return (
		 <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Promo />
            <Brands />
            <Arrivals />
            <Payday />
            <Youngs />
            <Downloade />
            <Join />
            <Footer />
          </div>
        } />
        <Route path="/privacy" element={
          <><Header />
          <PrivacyPolicy />
          <Footer /></>
        } />
      </Routes>
    </Router>
  );
}

export default App;
