import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {};

    componentDidMount() {
        this._getMovies();
    }

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies
        })
    };


    /* API */

    _callApi = () => {
        return fetch("https://api.themoviedb.org/3/movie/popular?api_key=c2892e87c752c29c1ed8c8fae846f0a7")
            .then(response => response.json())
            .then(json => json.results)
            .catch(err => console.log(err));
    };

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return (
                <Movie
                    title={movie.title}
                    poster={'https://image.tmdb.org/t/p/w500'+ movie.poster_path}
                    key={movie.id}
                    genres={movie.genre_ids}
                    overview={movie.overview}
                />
            );
        });
        return movies;
    };

    render() {
        const { movies } = this.state;
        console.log(movies)
        return (
			<div className={movies ? "App" : "App--loading"}>
                {movies ? this._renderMovies() : "Loading"}
			</div>
        );
    }
}

export default App;