import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const HomePage = () => {
  let { name } = useContext(AuthContext);

  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
};

export default HomePage;
