import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/viewContent.css";

// function ViewContent(props) {
//   return (
//     <div className="view-content">
//       {props.view === "movies" ? (
//         movies.map((movie) => (
//           <CreateCard
//             movieID={movie.movieID}
//             movieName={movie.movieName}
//             runtime={movie.runTime}
//             genre={movie.genre}
//             rating={movie.rating}
//             coverpic={movie.coverpic}
//           />
//         ))
//       ) : props.view === "books" ? (
//         <div>Books content</div>
//       ) : null}
//     </div>
//   );
// }

// function CreateCard(props) {
//   return (
//     <Link to={`/watch/?movieID=${encodeURIComponent(props.movieID)}`} style={{textDecoration: "none"}}>
//       <div className="card m-3">
//       <img
//         className="card-img-top rounded"
//         src={props.coverpic}
//         alt="Movie Poster"
//       />
//       <div className="card-img-overlay">
//         <h4 className="card-title text-danger">{props.movieName}</h4>
//         <p className="card-text text-warning">
//           <svg
//             xmlns="http://www.w3.org/2000/svg" 
//             width="17"
//             height="17"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="lucide lucide-award"
//           >
//             <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
//             <circle cx="12" cy="8" r="6" />
//           </svg>
//           A certified
//         </p>
//         <p className="card-text text-primary">
//           <svg
//             class="col"
//             xmlns="http://www.w3.org/2000/svg"
//             width="17"
//             height="15"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="lucide lucide-clock"
//           >
//             <circle cx="12" cy="12" r="10" />
//             <polyline points="12 6 12 12 16 14" />
//           </svg>
//           Runtime: {props.runtime}
//         </p>
//         <p className="card-text text-info genre-text">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="17"
//             height="17"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="lucide lucide-ungroup"
//           >
//             <rect width="8" height="6" x="5" y="4" rx="1" />
//             <rect width="8" height="6" x="11" y="14" rx="1" />
//           </svg>
//           Genre: {props.genre}
//         </p>
//         <p className="card-text rating-text">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="17"
//             height="15"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="lucide lucide-star-half"
//           >
//             <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
//           </svg>
//           Rating: {props.rating}
//         </p>
//       </div>
//       </div>
//     </Link>
//   );
// }

// export default ViewContent;