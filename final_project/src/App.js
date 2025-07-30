import './App.css';
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import CallToAction from './CallToAction.js';
import Specials from './Specials.js';
import CustomersSay from './CustomersSay.js';
import Chicago from './Chicago.js';

import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function App() {
  return (
    <>
      <header></header>
      <Nav />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CallToAction />
                <Specials />
                <CustomersSay />
                <Chicago />
              </>
            }
          />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
