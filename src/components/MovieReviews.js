// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
    return (
        <div className='review-list'>
            {props.reviews.map(
                (review, index) => 
                <div className='review' 
                key={index}>
                    <div>{review.display_title}</div>
                    <div>{review.mpaa_rating}</div>
                    <div>{review.critics_pick}</div>
                    <div>{review.critics_pick}</div>
                    <div>{review.headline}</div>
                    <div>{review.summary_short}</div>
                </div>)}
        </div>
    )
}

export default MovieReviews