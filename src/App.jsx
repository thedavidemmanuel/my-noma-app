import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth'; // Adjust the path if necessary
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignIn';
import DashboardPage from './pages/DashboardPage';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider> {/* Wrap your application within AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignInPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          {/* Additional routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook here
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default App;
