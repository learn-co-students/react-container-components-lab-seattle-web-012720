// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props){



    const reviewmapper = (props) => props.reviews.map(review => {
        return(
        <div className="review"> 
        <h2>{review.display_title}</h2> 
        <p>{review.summary_short}</p>
        </div>
        )
    })

  
    return(
        <div className="review-list">
            {reviewmapper(props)}
        </div>
    )
    



}