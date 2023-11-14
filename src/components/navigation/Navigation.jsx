import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/authorization.selectors';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <header className="header">
      <nav>
        {authenticated ? (
          <>
            {' '}
            <NavLink to={'/contacts'} className="header-link">
              Contacts
            </NavLink>
            <NavLink to={'/'} className="header-link">
              User
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={'/login'} className="header-link">
              LogIn
            </NavLink>
            <NavLink to={'/register'} className="header-link">
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
