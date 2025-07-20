import React from "react";

export default function IndexStatsSection({ statsContent}) {
    return (
        <section className="stats-section">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="bg-video">
            <source src={statsContent.video.url} alt={statsContent.video.alt} />
            Your browser does not support HTML5 video.
        </video>
        {/* Dimming Overlay */}
        <div className="video-overlay"></div>

        {/* Overlay Text Content */}
        <div className="content">
            {/* Left Side: Title + Caption */}
            <div className="left-text">
                <h2 className="heading">{statsContent.title}</h2>
                <p className="paragraph">{statsContent.caption}</p>
            </div>

            {/* Right Side: Stats */}
            <generateStatsBlocks  stats={statsContent.statistics} />
        </div>
    </section>
    );

    function generateStatsBlocks({ stats }){
        if (!Array.isArray(stats) || stats.length === 0) return null
        return (
            <div className="right-text">
                {stats.map((item, index) => (
                    <div className="stat-block">
                        <div className="stat-number">{item.value}</div>
                        <div className="stat-label">{item.label}</div>
                    </div>
                ))}
            </div>
        )
    }
}