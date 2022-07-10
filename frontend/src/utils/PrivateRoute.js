import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

// It's test component which doesn't work becase if we wont to use <Navigate> we need to have our <Route> in the same place
const PrivateRoute = ({ path, element }) => {
  const authenticated = false;

  console.log(authenticated);

  return (
    <Routes>
      {!authenticated ? (
        <Route element={<Navigate replace to='/login' />} />
      ) : (
        <Route element={element} path={path} />
      )}
    </Routes>
  );
};

export default PrivateRoute;
