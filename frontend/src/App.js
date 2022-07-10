import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

const authenticated = true;

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/'
            element={
              !authenticated ? <Navigate replace to='/login' /> : <HomePage />
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
