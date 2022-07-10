import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  let { LoginUser } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <div>
      <form onSubmit={handleSubmit(LoginUser)}>
        <label>
          Name
          <input
            {...register('username', {
              required: 'Enter your name',
              minLength: {
                value: 4,
                message: 'korotkovat',
              },
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}
        </div>

        <label>
          Password
          <input
            {...register('password', {
              required: 'Enter your password',
              minLength: {
                value: 5,
                message: 'korotkovat',
              },
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
        </div>
        <input type='submit' />
      </form>
    </div>
  );
}

export default LoginPage;
