import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../service/APIService';


// Navigation bar providing links based on user role and authentication status
function Navbar() {

    // Check if user is logged in and their role
    const isAuthenticated = ApiService.isAuthenticated();
    // Check if user is admin
    const isAdmin = ApiService.isAdmin();
    // Check if the user is normal user
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    // Handles user logout
    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar-ul">
                {/* Public navigation links */}
                <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>

                {/* User-specific links */}
                {isUser && <li><NavLink to="/find-booking" activeclassname="active">View my Bookings</NavLink></li>}
                {isUser && <li><NavLink to="/profile" activeclassname="active">User</NavLink></li>}

                {/* Admin-specific link */}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                {/* Auth links */}
                {!isAuthenticated &&<li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
                {!isAuthenticated &&<li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}

                {/* Logout link for authenticated users */}
                {isAuthenticated && <li><NavLink to="/logout" activeclassname="active" onClick={handleLogout}>Logout</NavLink></li>}
            </ul>        
        </nav>
    );
}

export default Navbar;