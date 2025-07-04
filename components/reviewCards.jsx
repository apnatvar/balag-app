import React, { useEffect, useState } from 'react';

export default function ReviewCards() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch('/assets/jsons/reviews.json');
        const allReviews = await response.json();
        console.log("useEffect ran");
        // Shuffle and pick 5 random reviews (no repeats)
        const selected = allReviews
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);

        setReviews(selected);
      } catch (err) {
        console.error('Failed to load reviews:', err);
      }
    }

    loadReviews();

  }, []);

    console.log(reviews)
  return (
    <>
      {reviews.map((review, index) => (
        <div key={index} className="card">
          <img className="image" src={review.image}></img>
          <div className="overlay">
            <p className="paragraph">{review.review}</p>
            <div className="name">{review.name}</div>
          </div>
        </div>
      ))}
    </>
  );
};
