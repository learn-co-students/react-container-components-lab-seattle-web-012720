// Code MovieReviews Here
import React from "react";

  
const MovieReviews = (props) => {
    return (
        <div className="review-list">
            <li className="review">
            <h3>Movie Title: {props.review["display_title"]}</h3>
            <h4>Byline: {props.review["byline"]}</h4>
            <p>Summary: {props.review["summary_short"]}</p>
            <p>Link: <a href="{props.review['link']['url']}"></a>{props.review["link"]["url"]}</p>
          </li>
        </div>
        )
}

export default MovieReviews
