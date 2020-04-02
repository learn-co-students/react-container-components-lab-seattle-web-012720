import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: "",
        }
    }


    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL+'&query='+this.state.searchTerm)
        .then(resp => resp.json())
        .then(json => {
            this.setState({reviews: json.results});
        })
    }
    

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label name='search'>Enter search term:</label>
                    <input type='text' name='search' value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <input type='submit' value='Search Reviews'></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
