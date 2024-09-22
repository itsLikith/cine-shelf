import React from "react";
import Header from "./Header";
import ListOptions from "./ListOptions";
import ViewContent from "./ViewContent";

import "../styles/HomePage.css";


function MoviesPage() {
    return(
        <React.Fragment>
            <div className="grid-container">
                <Header />
                <ListOptions />
                <ViewContent />
            </div>
        </React.Fragment>
    );
}

export default MoviesPage;

