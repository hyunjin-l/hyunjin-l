import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './App.css';
import Movie from './Movie'

	const movies = [
		{

			title: "matrix",
			poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
		},
        {
            title: "Full Metal Jacket",
            poster: "https://resizing.flixster.com/LtoVIF3TxiP3c9wtzPscteMXqG4=/206x305/v1.bTsxMTE2ODAyOTtqOzE3Njc5OzEyMDA7ODAwOzEyMDA"
        },
        {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
        },
        {
            title: "Star Wars",
            poster: "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
        },
	]

class App extends Component {

	// static propTypes = {
		// title: React.propTypes.string,
		// poster: React.propTypes.string
	// }
	componentDidMount(){
		setTimeout(() => {
			this.setState({
				greeting: 'hello again!'
			})
		}, 5000)
	}
	state = {
		greeting: 'hello!'
	}
	render() {
		return (
			<div className="App">
				{this.state.greeting}
				{movies.map((movie, index) => {
					return <Movie title={movie.title} poster={movie.poster} key={index}/>
				})}
			</div>
		);
	}
}

export default App;
