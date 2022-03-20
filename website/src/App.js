import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/LandingPage/Footer';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element = {<LandingPage />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
