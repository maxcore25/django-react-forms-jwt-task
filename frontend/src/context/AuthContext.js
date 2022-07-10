import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
const AuthContext = createContext();

export default AuthContext;

// it's better to write this fragment in separate component
export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(
    localStorage.getItem('authTokens')
      ? jwt_decode(localStorage.getItem('authTokens'))
      : null
  );
  let [authTokens, setAuthTokens] = useState(
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );

  let [loading, setLoading] = useState(true);

  let LoginUser = async e => {
    e.preventDefault();

    let response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } else {
      alert('Something went wrong');
    }
    console.log('data:', data);
    console.log('response:', response);
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
  };

  let updateToken = async e => {
    console.log('Update token called');
    let response = await fetch('http://127.0.0.1:8000/api/token/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: authTokens.refresh }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  let contextData = {
    user: user,
    LoginUser: LoginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    let fourMinutes = 1000 * 60 * 4;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
