import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'bI1Wiw141BQWbDhqbLeLmTZxTiUYV5NE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends React.Component{

    constructor(){
        super()
        
        this.state={
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.getSearchReviews()
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    getSearchReviews = () => {
        fetch(URL+'&query='+this.state.searchTerm)
        .then(res => res.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }



        render(){
            return(
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit}>
                        <label>Search
                            <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                        </label>
                    </form>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            )
      
        }



    }



