import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';
import { selectAuthUtherData } from 'redux/authorization.selectors';
import { FaUserCircle } from 'react-icons/fa';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUtherData);
  const hendleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className="user-data">
      <FaUserCircle fontSize="100px" className="icon" />

      <div>
        <p>
          <span className="acsent">User: </span>
          {user.name}
        </p>

        <p>
          <span className="acsent">Email: </span>
          {user.email}
        </p>
      </div>
      <button type="button" onClick={hendleLogOut} className="login-btn">
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
