// src/pages/auth/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Lock, Mail } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Mock Authentication Routing
    if (email === 'admin@corovexa.com' && password === 'admin123') {
      navigate('/admin/dashboard');
    } else if (email === 'ops@corovexa.com' && password === 'ops123') {
      navigate('/operations/dashboard');
    } else if (email === 'tech@corovexa.com' && password === 'tech123') {
      navigate('/maintenance/dashboard');
    } else {
      setError('Invalid credentials. Try admin@corovexa.com, ops@, or tech@ with password: "role"123');
    }
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card bg-white text-dark shadow border-0" style={{ width: '100%', maxWidth: '450px' }}>
        
        <div className="card-header bg-white text-center border-bottom py-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3" style={{ width: '64px', height: '64px' }}>
            <Activity size={32} className="text-primary" />
          </div>
          <h2 className="mb-1 tracking-wider fw-bold">COROVEXA</h2>
          <p className="text-muted small mb-0">Steel Plant Health & Predictive Maintenance</p>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleLogin}>
            {error && (
              <div className="alert alert-danger text-center p-2 mb-4" role="alert">
                {error}
              </div>
            )}
            
            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary">Email Address</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Mail size={20} className="text-secondary" />
                </span>
                <input
                  type="email"
                  className="form-control border-start-0"
                  placeholder="admin@corovexa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Lock size={20} className="text-secondary" />
                </span>
                <input
                  type="password"
                  className="form-control border-start-0"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold py-2 shadow-sm">
              SECURE LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}