import React from "react";

export default function AboutReviewsSection({reviewContent}) {
    return (
        <section className="review-section">
            <h2>{reviewContent?.heading}</h2>
            <div className="review-grid">
                {generateCards(reviewContent?.cards)}
            </div>
        </section>
    );

    function generateCards(cards) {
        return cards.map((review, index) => (
            <div key={index} className="card">
                <img className="image" src={review?.image?.url} alt={review?.image?.alt}></img>
                <div className="overlay">
                    <p className="paragraph">{review?.review}</p>
                    <div className="name">{review?.name}</div>
                </div>
            </div>
        ));
    };
}