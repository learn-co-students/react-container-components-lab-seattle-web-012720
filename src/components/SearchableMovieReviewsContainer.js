import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'tbaQLU6OrvpCv55Wkh29aPIh0S7kwQh1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';
const apiKey = `api-key=${NYT_API_KEY}`;
const query = 'query='
            

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        let searchTerm = event.target['search-term'].value;
        this.setState({searchTerm: searchTerm});
        fetch(URL+apiKey)
        .then(resp => resp.json())
        .then(movieReviews => this.setState({reviews: movieReviews.results}))
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleClick}>
                    <input type='text' name='search-term'/>
                    <input type='submit' name='search' value='search' />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
