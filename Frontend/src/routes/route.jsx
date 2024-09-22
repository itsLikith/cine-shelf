import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesPage from '../pages/MoviesPage';
import ZeroPage from '../pages/ZeroPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ZeroPage hasAccount="true" />}></Route>
                <Route path='/signup' element={<ZeroPage hasAccount="false" />}></Route>
                <Route path="/movies" element={<MoviesPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;