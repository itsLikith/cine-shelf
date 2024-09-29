import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MoviesPage from '../pages/MoviesPage';
import BooksPage from "../pages/BooksPage"

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
                <Route path='/signup' element={<SignupPage />}></Route>
                <Route path="/movies" element={<MoviesPage />} />
                <Route path='/books' element={<BooksPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;