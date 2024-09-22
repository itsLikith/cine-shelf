import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../styles/listOptions.css";

function ListOptions(props) {
    return (
        <div className="container-fluid p-2 list-options">
            <Link to="/movies">Movies</Link>
            <Link to="/books">Books</Link>
            <Link to="/magazines">Magazines</Link>
        </div>
    );
}

export default ListOptions; 