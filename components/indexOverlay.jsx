import React, { useState, useEffect } from "react";

export default function IndexOverlay() {
    const [showOverlay, setShowOverlay] = useState(false);
  
    useEffect(() => {
      if (!showOverlay) {
        const timeout = setTimeout(() => {
        setShowOverlay(true);
      }, 5000);
        return () => clearTimeout(timeout);
      }
    }, []);
    
    if(showOverlay) return null;

    return (
      <>
        <div className="intro-overlay">
          <div className="intro-content">
            <h1 className="main-text">Bala G Studios</h1>
          </div>
          <div className="intro-content">
            <p className="fade-in-text">Come write your story with us...</p>
          </div>
        </div>
      </>
    );
  }