import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/viewContent.css";

function ViewContent(props) {
    return (
        <div className="view-content">
            {
                (props.view === "movies") ? 
                    <div>
                        
                    </div>
                :
                (props.view === "books") ?
                    <div>

                    </div>
                :
                null
            }
        </div>
    );
}

export default ViewContent;