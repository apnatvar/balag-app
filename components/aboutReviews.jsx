import React from "react";
import ReviewCards from "./reviewCards";

export default function AboutReviewsSection() {
    return (
        <section className="review-section">
            <h2>Here's what our customers have to say</h2>
            <div className="review-grid">
                <ReviewCards />
            </div>
        </section>
    );
  }