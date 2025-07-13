import React from "react";
// import SideMenu from "@/components/sideMenu";
import AboutHeroSection from '@/components/aboutHero';
import AboutFounderSection from '@/components/aboutFounder';
import AboutOurStorySection from '@/components/aboutOurStory';
import AboutTeamSection from '@/components/aboutTeamMembers';
import AboutReviewsSection from '@/components/aboutReviews';
// import Footer from '@/components/footer';
// import { getPayloadData } from '@/components/getContent';
import "@/app/styles/global.css"; 
import "@/app/styles/about.css"; 

export default async function About() {
  return (
    <html lang="en">
        <body>

      {/* Right Side Expandable Menu */}
      {/* <SideMenu /> */}
        {/* Secondary Hero Section */}
        <AboutHeroSection />

        {/* Founders Section */}
        <AboutFounderSection />

        {/* Our Story Section */}
        <AboutOurStorySection />

        {/* Team Section */}
        <AboutTeamSection />

        {/* Reviews Section */}
        <AboutReviewsSection />
      {/* <Footer /> */}
      </body>
    </html>
  );
}
