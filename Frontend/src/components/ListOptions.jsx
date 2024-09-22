import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../styles/listOptions.css";
import MoviesLink from "../pages/MoviesLink.jsx";

function ListOptions(props) {
    return (
        <div className="container-fluid p-2 list-options">
            <a href="" className={props.active}>Movies</a>
            <a href="">Books</a>
            <a href="">Magazines</a>
        </div>
    );
}

export default ListOptions;