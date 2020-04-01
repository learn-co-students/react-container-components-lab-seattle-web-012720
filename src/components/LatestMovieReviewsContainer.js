import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state ={
            reviews: []
        }
    }

    renderReviews(){
        return this.state.reviews.map(review => {
            return <MovieReviews review={review} />
            })
    }


    fetchReviews() {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.results[0]['display_title'])
                this.setState({
                    reviews: data.results
                })
            })
    }

    render(){
        return (
            <div className="latest-movie-reviews">
            <h1>Latest Movie Reviews:</h1>
                <ul>
                    {this.renderReviews()}
                </ul>
            </div>
        )
    }

    componentDidMount = () => {
        this.fetchReviews()
    }
} 

export default LatestMovieReviewsContainer