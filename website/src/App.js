import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/LandingPage/Footer';
import ContactSection from './components/LandingPage/ContactSection';
import LibertyMutual from './components/pages/LibertyMutual';
import CovidApp from './components/pages/CovidApp';
import BEPlus from './components/pages/BEPlus';
import Loggit from './components/pages/Loggit';
import Monkeytype from  './components/pages/Monkeytype';
import AdiAI from './components/pages/AdiAI';
import { useState } from 'react';
import YTFocus from './components/pages/YTFocus';
import KatApp from './components/pages/KatApp';
import Hada from './components/pages/Hada';
import About from './components/pages/About';

function App() {
	const [mySpot, setMySpot] = useState(0);
	return (
		<>
			<Router>
				<Routes>
					<Route path="*" element = {<><LandingPage mySpot={mySpot} setMySpot={setMySpot}/><ContactSection /></>} />
					<Route path="/yt-focus" element = { <YTFocus/> } />
					<Route path="/liberty-mutual" element = { <LibertyMutual/> } />
          <Route path="/adi-ai-app" element = { <AdiAI/> } />
					<Route path="/covid-app" element = { <CovidApp/> } />
					<Route path="/built-environment-plus" element = { <BEPlus/> } />
					<Route path="/loggit" element = { <Loggit/> } />
					<Route path="/monkeytype" element = { <Monkeytype/> } />
					<Route path="/katapp" element = { <KatApp/> } />
					<Route path="/hada" element = { <Hada/> } />
					<Route path="/about" element = { <About setMySpot={setMySpot}/> } />
				</Routes>
			</Router> 
			<Footer />
		</>
	);
	//really don't feel like setting up a context for this haha
}

export default App;
