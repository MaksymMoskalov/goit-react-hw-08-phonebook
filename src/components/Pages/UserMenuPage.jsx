import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';

const UserMenu = () => {
  const dispatch = useDispatch();

  const hendleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <p>mango@mail.com</p>
      <button type="button" onClick={hendleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
