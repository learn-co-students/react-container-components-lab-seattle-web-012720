// Code MovieReviews Here
import React from 'react'

export default function MovieReviews({reviews}) {
    return (
        <div className='review-list'>
            {reviews.map(review => {
                const {display_title, headline, summary_short} = review;
                return (
                <div className='review' key={display_title}>
                    <h1>{display_title}</h1>
                    <h4>{headline}</h4>
                    <p>{summary_short}</p>
                </div>)
            })}
        </div>
    )
} 