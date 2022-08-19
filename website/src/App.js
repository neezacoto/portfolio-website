import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import DiscPage from './components/DiscPage/DiscPage';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/LandingPage/Footer'
import ContactSection from './components/LandingPage/ContactSection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="*" 
            element = {<><LandingPage /><ContactSection /></>}/>
          <Route 
            path="/liberty-mutual" 
            element = {<DiscPage />}/>
        </Routes>
      </Router>

        
      <Footer />
    </>
  );
}

export default App;
