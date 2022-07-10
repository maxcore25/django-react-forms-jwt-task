import './App.css';
import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/'
            element={<ProtectedRoute>{<HomePage />}</ProtectedRoute>}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
