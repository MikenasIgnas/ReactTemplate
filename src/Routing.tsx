import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonAppBar from './components/AppHeader';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { setUserData } from './auth/AuthReducer/reducer';
import NotFoundPage from './pages/NotFoundPage';
import LogedInUserHeader from './components/LoginAndRegistrationComponents/LogedInUserHeader/LogedInUserHeader';
import ChecklistHistoryPage from './pages/ChecklistHistoryPage';
import ChecklistPage from './pages/ChecklistStartPage';
import ChecklistRoutesPage from './pages/ChecklistPage/ChecklistRoutesPage';

const Routing = () => {
    const token = useAppSelector((state) => state.auth.id);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        const id = localStorage.getItem('id');
        const username = localStorage.getItem('username');
        const secret = localStorage.getItem('secret');

        if (username && id && secret) {
          dispatch(setUserData({ username, id, secret }));
      }
    }, [dispatch]);
    return (
      <BrowserRouter>
        {token
            ? (
              <Routes>
                <Route path="/" element={<LogedInUserHeader />}>
                  <Route path="ChecklistPage" element={<ChecklistPage />} />
                  <Route path="ChecklistHistoryPage" element={<ChecklistHistoryPage />} />
                  <Route path="ChecklistRoutes" element={<ChecklistRoutesPage />} />
                </Route>
              </Routes>
               )
            : (
              <Routes>
                <Route path="/" element={<ButtonAppBar />}>
                  <Route index element={<MainPage />} />
                  <Route path="LoginPage" element={<LoginPage />} />
                  <Route path="RegisterPage" element={<RegisterPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
                )}
      </BrowserRouter>
        );
};

export default Routing;
