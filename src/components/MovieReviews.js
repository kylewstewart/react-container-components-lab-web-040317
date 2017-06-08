import React, { Component } from 'react';

const renderReview = (review) => {
  return (
    <div className="review">
      <p> Title: {review.display_title} </p>
      <p> Rating: {review.mpaa_rating} </p>
      <p> Summary: {review.summary_short} </p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return( <div className="review-list">
    {reviews.map(renderReview)}
     </div>
   )
}
  MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
