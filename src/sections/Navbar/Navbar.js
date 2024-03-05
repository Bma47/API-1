import React, {Component ,useState} from 'react';

const API_key = "a89b2a2225b9c2590d9d3de4f9596d31";
const base_url = "https://api.themoviedb.org/3/";
const base_img = "https://image.tmdb.org/t/p/w500/";
const search_movies = "https://api.themoviedb.org/3/search/movie";

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async () => {
        try {

            const response = await fetch(`${search_movies}?api_key=${API_key}&query=${query}`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

// class Navbar extends Component {


        return (
            <div >


                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <i className="fas fa-film mr-2"></i>
                            Movie
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link nav-link-1 active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-2" href="videos.html">Movies</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link nav-link-3" href="videos.html">Movies</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link nav-link-4" href="contact.html">Top 10</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="tm-hero   " data-parallax="scroll" data-image-src="img/section.jpg">


                </div>

                <div>

                </div>
            </div>
        );
};





export default MovieSearch;