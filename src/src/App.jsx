import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import HealthcareDashboard from './pages/HealthcareDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<HealthcareDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
