import React from "react";
import "@/app/styles/global.css"; 
import "@/app/styles/about.css"; 
// import SideMenu from "@/components/sideMenu";
// import AboutHeroSection from '@/components/aboutHero';
// import AboutFounderSection from '@/components/aboutFounder';
// import AboutOurStorySection from '@/components/aboutOurStory';
// import AboutTeamSection from '@/components/aboutTeamMembers';
// import AboutReviewsSection from '@/components/aboutReviews';
// import Footer from '@/components/footer';
// import { getPayloadData } from '@/components/getContent';
import { getPayload } from 'payload';
import config from '@/payload.config';

export default async function About() {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({ slug: 'about' }); 
  console.log("hero", result  );
  return <h2>{result.hero.title}</h2>; // Show loading state while data is being fetched
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
