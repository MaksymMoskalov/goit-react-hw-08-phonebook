import { Route, Routes } from 'react-router-dom';
import ContactsPage from './Pages/ContactsPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import Navigation from './navigation/Navigation';
import RegisterPage from './Pages/RegisterPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/authReducer';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
