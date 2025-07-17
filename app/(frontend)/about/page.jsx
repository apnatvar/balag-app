import React from "react";
import SideMenu from "@/components/sideMenu";
import AboutHeroSection from '@/components/aboutHero';
import AboutFounderSection from '@/components/aboutFounder';
import AboutOurStorySection from '@/components/aboutOurStory';
import AboutTeamSection from '@/components/aboutTeamMembers';
import AboutReviewsSection from '@/components/aboutReviews';
import "@/app/styles/global.css"; 
import "@/app/styles/about.css"; 

export default async function About() {
    const payload = await getPayload({ config });
    const content = await payload.findGlobal({ slug: 'about' });
  return (
    <html lang="en">
        <body>

      {/* Right Side Expandable Menu */}
      <SideMenu />
        {/* Secondary Hero Section */}
        <AboutHeroSection heroContent={content.hero} />

        {/* Founders Section */}
        <AboutFounderSection founderContent={content.founder} />

        {/* Our Story Section */}
        <AboutOurStorySection storyContent={content.story} />

        {/* Team Section */}
        <AboutTeamSection teamContent={content.team} />

        {/* Reviews Section */}
        <AboutReviewsSection reviewContent={content.reviews} />
      {/* <Footer /> */}
      </body>
    </html>
  );
}
