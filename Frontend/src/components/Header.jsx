import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../styles/header.css";
import defaultPfp from "../assets/images/defaultPfp.jpeg";

function Header() {
    return (
        <div className="grid-header container-fluid">
            <div className="logo-div"><img src="" alt="logo"></img></div>
            <div className="search-bar"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="search" name="" id="searchBar" class="form-control" placeholder="Search"></input></div>
            <div className="profile">
                <svg className="badge bg-danger" xmlns="http://www.w3.org/2000/svg" width="22" height="22" title="notifications" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" title="premium" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h30"/></svg>
                <img src={defaultPfp} alt="profile" id="profile-pic"></img>
            </div>
        </div>
    );
}

export default Header;