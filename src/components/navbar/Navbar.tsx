import './Navbar.scss';
import logo from '../../assets/icons/pfizer.png';
import { Button, Tooltip } from '@mui/material';
import logout from '../../assets/icons/exit.png';
import { Link, useNavigate } from 'react-router-dom';
import logoutUser from '../../services/user-service/logoutUser/logoutUser';
import useAuthContext from '../../hooks/useAuthContex';
import useLocalStorage from '../../hooks/useLocalStorage';

const Navbar = () => {

    const { clearLocalStorageItem } = useLocalStorage();
    const { setToken } = useAuthContext();
    const navigate = useNavigate();

    const logOutUser = () => {
        const isConfirmed = window.confirm('Are you sure want to logout?');
        if(isConfirmed) {
            logoutUser();
            clearLocalStorageItem('user');
            clearLocalStorageItem('accessToken');
            setToken(null);
            navigate('/');
        }
    }

    return (
        <div className='navbar' data-testid="navbar">
            <div className="navbar-inner">
                <div className="logo-content">
                    <img src={logo} alt="logo" className="logo" data-testid='logo'/>
                </div>
                <div className='auth-btns'>
                    <Link to='/account'>
                        <Button data-testid='loginBtn' type="submit" variant="contained" size="small" className='control-button'>My Account</Button>
                    </Link>
                    <Link to='/account'>
                        <Button data-testid='loginBtn' type="submit" variant="contained" size="small" className='control-button'>My Courses</Button>
                    </Link>
                    <Tooltip title="Logout" data-testid='tooltip-logout'>
                        <div className="icon-container" onClick={logOutUser}>
                            <img src={logout} alt="logout-icon" className="icon" data-testid='logout'/>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );

}

export default Navbar;