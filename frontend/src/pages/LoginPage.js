import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  let { LoginUser } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onClick = () => {
    const name = watch('username');
    const password = watch('password');
    LoginUser(name, password);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onClick)}>
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
            type='password'
            {...register('password', {
              required: 'Enter your password',
              minLength: {
                value: 4,
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
