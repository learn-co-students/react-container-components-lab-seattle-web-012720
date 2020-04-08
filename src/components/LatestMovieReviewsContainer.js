import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'bI1Wiw141BQWbDhqbLeLmTZxTiUYV5NE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component{
    constructor(){
        super()

        this.state ={
            reviews: []
        }
    }

    componentDidMount(){
        this.getMov()
    }

    getMov(){
        fetch(URL)
        .then(res => res.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }


    render(){
      
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
