import React, { useState } from 'react';
import "./Container.css";
import under from "../../assets/img/under-18.jpg";
import logo from "../Container/logo.png";
// icons
import { BsFillStarFill } from "react-icons/bs";
import { FaRegStarHalfStroke } from "react-icons/fa6";

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

    return (
        <div className="container-1" >


            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link nav-link-1 active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-2" href="/">Movies</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link nav-link-3" href="/">Movies</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link nav-link-4" href="/">Top 10</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




            <div>

            </div>
            <div className="tm-hero   " data-parallax="scroll" data-image-src="img/section.jpg">
                <div className="overlay"></div>

                <h1 className="text-center m-5 p-4 ">Search for movies</h1>
                <div className="search d-flex justify-content-center align-items-center " >

                    <input className="form-control tm-search-input  d-flex  w-75 m-5"
                           type="text"
                           placeholder="Search for movies"
                           value={query}
                           onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn btn-success tm-search-btn m-1 align-items-center"
                            onClick={searchMovies}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>

            </div>


            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col">
                        <div className="card">
                            <div className="card-body d-flex">
                                <img
                                    className="card-img w-auto "
                                    src={`${base_img}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <img className="under-18" src={under} alt="Logo" />

                                <div>
                                    <h5 className="card-title font-weight-bold text-danger">{movie.title}</h5>
                                    <p className="card-text">{movie.overview}</p>
                                    <div className="text">
                                  <ul>
                                    <li><p className="card-text  ">Release date <br/>{movie.release_date}</p></li>
                                    {/*<li><p className="card-text font-weight-bold ">{movie.original_title}</p></li>*/}
                                    <li><p className="card-text  ">Original language<br/>{movie.original_language}</p></li>
                                      <li><li><p className="card-text  ">vote average<br/>
                                          <BsFillStarFill />
                                          <BsFillStarFill />
                                          <BsFillStarFill />
                                          <BsFillStarFill />
                                          <FaRegStarHalfStroke /> {movie.vote_average} </p></li>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>


    );
};

export default MovieSearch;
