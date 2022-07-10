import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

// it's better to write this fragment in separate component
export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [authTokens, setAuthTokens] = useState(null);

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
    } else {
      alert('Something went wrong');
    }
    console.log('data:', data);
    console.log('response:', response);
  };

  let contextData = {
    user: user,
    LoginUser: LoginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
