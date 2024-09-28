import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../styles/listOptions.css";

function ListOptions(props) {
    return (
        <div className="container-fluid p-2 list-options">
            <Link to="/movies" className={(props.active === "movies")?"active-link":null}>Movies</Link>
            <Link to="/books" className={(props.active === "books")?"active-link":null}>Books</Link>
            <Link to="/magazines" className={(props.active === "magazines")?"active-link":null}>Magazines</Link>
        </div>
    );
}

export default ListOptions;