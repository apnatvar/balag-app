'use client';

import React, { useEffect, useState } from 'react';
import "@/app/styles/global.css"; 
import "@/app/styles/about.css"; 
import SideMenu from "@/components/sideMenu";
import AboutHeroSection from '@/components/aboutHero';
import AboutFounderSection from '@/components/aboutFounder';
import AboutOurStorySection from '@/components/aboutOurStory';
import AboutTeamSection from '@/components/aboutTeamMembers';
import AboutReviewsSection from '@/components/aboutReviews';
// import Footer from '@/components/footer';

export default function AboutPage() {
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/json/partial-data?section=about")
      .then((res) => res.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((err) => {
        console.error("Failed to load JSON:", err);
      });
  }, []);

  if (!jsonData.about) return null;

  return (
    <html lang="en">
        <body>
      {/* Right Side Expandable Menu */}
      <SideMenu />
        {/* Secondary Hero Section */}
        <AboutHeroSection heroContent={jsonData.about.hero} />

        {/* Founders Section */}
        <AboutFounderSection founderContent={jsonData.about.founder} />

        {/* Our Story Section */}
        <AboutOurStorySection storyContent={jsonData.about.story} />

        {/* Team Section */}
        <AboutTeamSection teamContent={jsonData.about.team} />

        {/* Reviews Section */}
        <AboutReviewsSection reviewContent={jsonData.about.reviews} />
      {/* <Footer /> */}
      </body>
    </html>
  );
}
