import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard'; 
import Logout from './components/logout';
import Homepage from './components/homepage'; 
import ProtectedRoute from './components/protectedRoute';
import ItemDetails from './components/itemDetails';
import Categories from './components/categoriesPage';
import Sell from './components/sellersPage';
import { AuthProvider } from './contexts/authContexts'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
      <AuthProvider>
          <Router>
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/home" element={<Homepage />} />
                  <Route path="/sell" element={<Sell />} />
                  <Route path="/" element={<Navigate to="/login" />} />
                  <Route path="/item-details/:itemId" element={<ItemDetails/>} />
                  <Route path="/category-details/:categoryName" element={<Categories/>} />
              </Routes>
          </Router>
      </AuthProvider>
  );
}

export default App;

