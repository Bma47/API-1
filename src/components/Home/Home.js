// import React, { useState } from 'react';
//
// const API_key = "a89b2a2225b9c2590d9d3de4f9596d31";
// const base_url = "https://api.themoviedb.org/3/";
// const base_img = "https://image.tmdb.org/t/p/w500/";
// const search_movies = "https://api.themoviedb.org/3/search/movie";
//
// const MovieSearch = () => {
//     const [query, setQuery] = useState('');
//     const [movies, setMovies] = useState([]);
//
//     const searchMovies = async () => {
//         try {
//             const response = await fetch(`${search_movies}?api_key=${API_key}&query=${query}`);
//             const data = await response.json();
//             setMovies(data.results);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//
//     return (
//         <div>
//             <h1>Movie Search</h1>
//             <input
//                 type="text"
//                 placeholder="Search for movies"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//             <button onClick={searchMovies}>Search</button>
//
//             <div>
//                 {movies.map(movie => (
//                     <div key={movie.id}>
//                         <h2>{movie.title}</h2>
//                         <img src={`${base_img}${movie.poster_path}`} alt={movie.title} />
//                         <p>{movie.overview}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default MovieSearch;
