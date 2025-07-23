import React from "react";

export default function IndexStatsSection({ statsContent }) {
    console.log(statsContent.statistics);
    return (
        <section className="stats-section">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="bg-video">
            <source src={statsContent?.video.url} alt={statsContent?.video.alt} />
            Your browser does not support HTML5 video.
        </video>
        {/* Dimming Overlay */}
        <div className="video-overlay"></div>

        {/* Overlay Text Content */}
        <div className="content">
            {/* Left Side: Title + Caption */}
            <div className="left-text">
                <h2 className="heading">{statsContent?.title}</h2>
                <p className="paragraph">{statsContent?.caption}</p>
            </div>

            {/* Right Side: Stats */}
            <div className="right-text">
                {generateStatsBlocks(statsContent.statistics)}
            </div>
        </div>
    </section>
    );

    function generateStatsBlocks(stats){
        console.log(stats)
        if (!Array.isArray(stats) || stats.length === 0) return null
        return stats.map((item, index) => (
            <div className="stat-block" key={index}>
                <div className="stat-number">{item.value}</div>
                <div className="stat-label">{item.label}</div>
            </div>
        ))        
    }
}