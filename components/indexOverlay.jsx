"use client";
// This file is used to create an index overlay with a fade-in animation for text.

import React, { useState, useEffect } from "react";

export default function IndexOverlay({ overlayContent }) {
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
        <div className="intro-overlay">
          <div className="intro-content">
            <p className="main-text">{overlayContent?.title}</p>
          </div>
          <div className="intro-content">
            <p className="fade-in-text">{overlayContent?.subtitle}</p>
          </div>
        </div>
    );
  }