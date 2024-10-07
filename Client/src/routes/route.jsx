import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MoviesPage from '../pages/MoviesPage';
import BooksPage from "../pages/BooksPage"
import ProfilePage from '../components/ProfilePage';
import WatchPage from '../pages/WatchPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path='/books' element={<BooksPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/watch' element={<WatchPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;