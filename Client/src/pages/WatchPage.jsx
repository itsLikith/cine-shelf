import React, {useState} from "react";
import { useLocation, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/WatchPage.css";
import RecommendedMovies from "../components/RecommendedMovies";

function WatchPage() {
  const [movieName, setmovieName] = useState("Movie Name");
  const [movieTrailerLink, setmovieTrailerLink] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDescription, setmovieDescription] = useState("");
  const [movieisLiked, setmovieisLiked] = useState(false);
  const [movieWatchlater, setmovieWatchlater] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieID = queryParams.get('movieID');

  return (
    <div className="watchMoviePage">
      <div className="container-fluid bg-dark d-flex align-items-center text-light p-4">
          <Link to="/movies" className=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-step-back"><line x1="18" x2="18" y1="20" y2="4"/><polygon points="14,20 4,12 14,4"/></svg></Link>Movie Name
      </div>
      <div className="container-fluid bg-dark"><video className="m-4 border-light rounded" src="./Pictures/Prasunethon.mp4" poster="./Pictures/demo.jpg" height="500" controls></video></div>
      <div className="bg-dark text-light p-5 pt-2">
          <h2>Movie Name</h2>
          <p><a href="" className="btn btn-info m-2">Trailer</a><button className="btn btn-warning m-2" disabled>rating</button><button className="btn btn-danger m-2" disabled>Age</button></p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde animi quas atque voluptas mollitia quos dicta alias modi, repudiandae, nam minima veritatis ipsum sint incidunt expedita sapiente eos accusantium accusamus.</p>
          {
            (movieisLiked === false) ? 
              <button className="btn btn-primary m-2 w-100 p-2 d-flex align-items-center justify-content-center" onClick={()=> setmovieisLiked(true)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg><span className="m-2">Like</span></button>
            :
            (movieisLiked === true) ?
              <button className="btn btn-primary m-2 w-100 p-2 d-flex align-items-center justify-content-center" onClick={() => setmovieisLiked(false)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-off"><line x1="2" y1="2" x2="22" y2="22"/><path d="M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"/><path d="M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"/></svg><span className="m-2">Unlike</span></button>
            :
            null
          }
          {
            (movieWatchlater === false) ?
              <button className="btn btn-success w-100 m-2 p-2 d-flex align-items-center justify-content-center" onClick={() => setmovieWatchlater(true)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span className="m-2">Watch later</span></button>
            :
            (movieWatchlater === true) ?
              <button className="btn btn-success w-100 m-2 p-2 d-flex align-items-center justify-content-center" onClick={() => setmovieWatchlater(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-timer-off"><path d="M10 2h4"/><path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"/><path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"/><path d="m2 2 20 20"/><path d="M12 12v-2"/></svg><span className="m-2">Remove from watch later</span></button>
            :
            null
          }
          <div className=" mt-5">
            <h6>Director:</h6>
            <h6><b>Music Director: </b></h6>
            <br/>
            <dl>
              <dt>Cast</dt>
              <dd>Actor: </dd>
              <dd>Actress: </dd>
            </dl>
          </div>
      </div>
      <RecommendedMovies />
  </div>
  );
}

export default WatchPage;