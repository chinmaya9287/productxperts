import './App.css';
import AfterHome from './Components/AfterHome/AfterHome';
import BlogSection from './Components/BlogSection/BlogSection';
import Brands from './Components/Brands/Brands';
import FAQ from './Components/FAQs/FAQ';
import Productstrategy from './Components/FinalSubPages/Productstrategy';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MidSecStart from './Components/MidSecStart/MidSecStart';
import Quotes from './Components/Quotes/Quotes';
import ThreeSection from './Components/ThreeSection/ThreeSection';
import AboutPage from './Components/pages/AboutPage';
import CoachingPage from './Components/pages/CoachingPage';
import ConsultingPage from './Components/pages/ConsultingPage';
import HomePage from './Components/pages/HomePage/HomePage';
import StartHere from './Components/pages/StartHere';
import TrainingPage from './Components/pages/TrainingPage';
import Projectsaving from './Components/FinalSubPages/Projectsaving';
import Customerdevelopment from './Components/FinalSubPages/Customerdevelopment';

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Advancedpm from './Components/FinalSubPages/Advancedpm';
import Pmforfounders from './Components/FinalSubPages/Pmforfounders';
import Introductiontopm from './Components/FinalSubPages/Introductiontopm';
import Groupcoaching from './Components/FinalSubPages/Groupcoaching';
import Productmanagementforfounders from './Components/FinalSubPages/Productmanagementforfounders';
import Productmanagementforpm from './Components/FinalSubPages/Productmanagementforpm';


function App() {
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path= '/consulting' element={<ConsultingPage />} />
      <Route path='/training' element={<TrainingPage />} />
      <Route path='/coaching' element={<CoachingPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<StartHere />} />

      
     
      <Route path='/Productstrategy' element={<Productstrategy />} />
      <Route path='/Projectsaving' element={<Projectsaving />} />
      <Route path='/Customerdevelopment' element={<Customerdevelopment />} />
      <Route path='/AdvancedPM' element={<Advancedpm />} />
      <Route path='/PMforFounders' element={<Pmforfounders />} />
      <Route path='/IntroductiontoPM' element={<Introductiontopm />} />
      <Route path='/Groupcoaching' element={<Groupcoaching />} />
      <Route path='/Productmanagementforfounders' element={<Productmanagementforfounders />} />
      <Route path='/Productmanagementforpm' element={<Productmanagementforpm />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
