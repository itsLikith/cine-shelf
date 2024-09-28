import React from "react";
import Header from "../components/Header";
import ListOptions from "../components/ListOptions";
import ViewContent from "../components/ViewContent";

import "../styles/HomePage.css";


function MoviesPage() {
    return(
        <React.Fragment>
            <div className="grid-container">
                <Header />
                <ListOptions active="movies" />
                <ViewContent />
            </div>
        </React.Fragment>
    );
}

export default MoviesPage;