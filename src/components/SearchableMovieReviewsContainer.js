import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state ={
            searchTerm: '',
            reviews: []
        }
    }

    renderReviews(){
        return this.state.reviews.map(review => {
                return <MovieReviews review={review} />
            })
    }

    fetchReviews() {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState(
                    this.setState(prevState => {
                        return {
                            reviews: data.results
                        };
                    }
            ))
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchReviews()
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>What reviews are you interested in? </label>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button type="submit">Filter Reviews</button>
                </form>
                {this.fetchReviews()}
                <div>
                    <ul>
                        {this.renderReviews()}
                    </ul>
                </div>
            </div>
        )
    }
} 

export default SearchableMovieReviewsContainer
