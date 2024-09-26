import React from "react";
import Header from "../components/Header";
import ListOptions from "../components/ListOptions";
import ViewContent from "../components/ViewContent";

import "../styles/HomePage.css";


function MagazinesPage() {
    return(
        <React.Fragment>
            <div className="grid-container">
                <Header />
                <ListOptions active="magazines" />
                <ViewContent />
            </div>
        </React.Fragment>
    );
}

export default MagazinesPage;