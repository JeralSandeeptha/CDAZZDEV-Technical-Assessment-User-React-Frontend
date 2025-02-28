import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/notfound-page/NotFoundPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import LoginPage from '../pages/login-page/LoginPage';
import DashboardPage from '../pages/dashboard-page/DashboardPage';
import LandingPage from '../pages/landing-page/LandingPage';

const MainNavigation = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<LandingPage />}
        />
        <Route 
          path='/login' 
          element={<LoginPage />}
        />
        <Route 
          path='/register' 
          element={<RegisterPage />}
        />
        <Route 
          path='/dashboard'   
          element={<DashboardPage />}
        />
        <Route path='*' Component={NotFoundPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation;