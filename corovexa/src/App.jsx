// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        
        {/* Placeholder Routes for Dashboards */}
        <Route path="/admin/dashboard" element={<div className="container mt-5"><h2>Admin Dashboard Hook</h2></div>} />
        <Route path="/operations/dashboard" element={<div className="container mt-5"><h2>Operations Dashboard Hook</h2></div>} />
        <Route path="/maintenance/dashboard" element={<div className="container mt-5"><h2>Maintenance Dashboard Hook</h2></div>} />
      </Routes>
    </Router>
  );
}

export default App;