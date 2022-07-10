import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export default AuthContext;

// it's better to write this fragment in separate component
export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [authTokens, setAuthTokens] = useState(null);

  let LoginUser = async e => {
    e.preventDefault();

    console.log('form submit');

    // let response = fetch('http://127.0.0.1:8000/api/token/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username: null, password: null }),
    // });
  };

  let contextData = {
    LoginUser: LoginUser,
  };

  return (
    <AuthContext.Provider value={{ name: 'Oleg' }}>
      {children}
    </AuthContext.Provider>
  );
};
