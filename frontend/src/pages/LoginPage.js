import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  let { LoginUser } = useContext(AuthContext);
  let { name } = useContext(AuthContext);

  console.log(LoginUser, name);

  return (
    <div>
      <form onSubmit={LoginUser}>
        <input type='text' name='username' placeholder='Enter Username' />
        <input type='password' name='password' placeholder='Enter Password' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default LoginPage;
