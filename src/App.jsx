import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import LandingPage from './pages/LandingPage';
import DocLogin from './pages/DocLogin';
import DocHome from './pages/DocHome';
import DocFeed from './pages/DocFeed';
import Diagnosis from './pages/Diagnosis';
import Calendar from './pages/Calendar';
import DocPatient from './pages/DocPatient';
import DocProfile from './pages/DocProfile';
import Inbox from './pages/Inbox';
import DiseaseModels from './pages/DiseaseModels';
import BrainTumorPage from './pages/BrainTumorPage';
import ObesityRiskPage from "./pages/ObesityRiskPage";
import LungCancerPage from "./pages/LungCancerPage";
import SkinDiseasePage from "./pages/SkinDiseasePage";
import DepressionRiskPage from "./pages/DepressionRiskPage";
import DiabetesPredictorPage from "./pages/DiabetesPredictorPage";
import MapPage from './pages/MapPage';



import BrainTumor from "./models/BrainTumor";
import ObesityRisk from "./models/ObesityRisk";
import DepressionRisk from "./models/DepressionRisk";
import SkinDisease from "./models/SkinDisease";
import LungCancer from "./models/LungCancer";
import NotFound from './pages/NotFound';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<DocLogin />} />

        {/* Private Routes with Layout */}
        <Route path="/home" element={<Layout><DocHome /></Layout>} />
        <Route path="/feed" element={<Layout><DocFeed /></Layout>} />
        <Route path="/diagnosis" element={<Layout><Diagnosis /></Layout>} />
        <Route path="/calendar" element={<Layout><Calendar /></Layout>} />
        <Route path="/patients" element={<Layout><DocPatient /></Layout>} />
        <Route path="/profile" element={<Layout><DocProfile /></Layout>} />
        <Route path="/inbox" element={<Layout><Inbox /></Layout>} />
        <Route path="/diseasemodels" element={<Layout><DiseaseModels /></Layout>} />
        <Route path="/braintumor" element={<BrainTumorPage />} />
        <Route path="/obesity" element={<ObesityRiskPage />} />
<Route path="/lungcancer" element={<LungCancerPage />} />
<Route path="/skin" element={<SkinDiseasePage />} />
<Route path="/depression" element={<DepressionRiskPage />} />
<Route path="/diabetes" element={<DiabetesPredictorPage />} />
<Route path="/map" element={<MapPage />} />
 {/* 👉 Disease Model Routes */}
 
        <Route path="/model/braintumor" element={<BrainTumor />} />
        <Route path="/model/obesity" element={<ObesityRisk />} />
        <Route path="/model/depression" element={<DepressionRisk />} />
        <Route path="/model/skin" element={<SkinDisease />} />
        <Route path="/model/lungcancer" element={<LungCancer />} />



        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
