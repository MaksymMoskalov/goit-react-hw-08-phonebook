import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authReducer';

const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <div className="form__group field">
        <input
          {...register('email', { required: true })}
          type="email"
          className="form__field"
          placeholder="Email"
        />
        <label className="form__label">Email</label>
        {errors.email && <span>This field is required</span>}
      </div>

      <div className="form__group field">
        <input
          {...register('password', { required: true })}
          type="password"
          className="form__field"
          placeholder="Password"
        />
        <label className="form__label">Password</label>
        {errors.password && <span>This field is required</span>}
      </div>

      <button type="submit" className="login-btn">
        Sign In
      </button>
    </form>
  );
};

export default LoginPage;
