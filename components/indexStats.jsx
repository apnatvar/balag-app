import React from "react";

export default function IndexStatsSection() {
    return (
        <section className="stats-section">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="bg-video">
            <source src="/assets/last-section-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        {/* Dimming Overlay */}
        <div className="video-overlay"></div>

        {/* Overlay Text Content */}
        <div className="content">
            {/* Left Side: Title + Caption */}
            <div className="left-text">
                <h2 className="heading">Unforgettable Moments</h2>
                <p className="paragraph">Every event we plan leaves a lasting impression.</p>
            </div>

            {/* Right Side: Stats */}
            <div className="right-text">
                <div className="stat-block">
                <div className="stat-number">350+</div>
                <div className="stat-label">Weddings Celebrated</div>
                </div>
                <div className="stat-block">
                <div className="stat-number">25</div>
                <div className="stat-label">Team Members</div>
                </div>
                <div className="stat-block">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Average Rating</div>
                </div>
            </div>
        </div>
    </section>
    );
}