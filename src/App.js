import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard'; 
import Logout from './components/logout';
import ProtectedRoute from './components/protectedRoute';
import { AuthProvider } from './contexts/authContexts'; 

function App() {
  return (
      <AuthProvider>
          <Router>
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/" element={<Navigate to="/login" />} />
              </Routes>
          </Router>
      </AuthProvider>
  );
}

export default App;

