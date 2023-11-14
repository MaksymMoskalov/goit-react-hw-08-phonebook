import { Route, Routes } from 'react-router-dom';
import ContactsPage from './Pages/ContactsPage';
import LoginPage from './Pages/LoginPage';
import UserMenu from './Pages/UserMenuPage';
import Navigation from './navigation/Navigation';
import RegisterPage from './Pages/RegisterPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/authReducer';
import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';
import { StyledContainer } from './StyledAppContainer/Container.styled';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <StyledContainer>
      {' '}
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserMenu />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
      </Routes>
    </StyledContainer>
  );
}
