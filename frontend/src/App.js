import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// import PrivateRoute from './utils/PrivateRoute';
import AuthContext, { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import { useContext } from 'react';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className='App'>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/'
            element={user ? <HomePage /> : <Navigate replace to='/login' />}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
