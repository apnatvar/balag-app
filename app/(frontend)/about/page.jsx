import React from "react";
import SideMenu from "@/components/sideMenu";
import Footer from "@/components/footer";
import AboutHeroSection from '@/components/aboutHero';
import AboutFounderSection from '@/components/aboutFounder';
import AboutOurStorySection from '@/components/aboutOurStory';
import AboutTeamSection from '@/components/aboutTeamMembers';
import AboutReviewsSection from '@/components/aboutReviews';

import { getPayload } from "payload";
import config from "@/payload.config";
import { NotFound } from "payload";

import "@/app/styles/global.css"; 
import "@/app/styles/about.css"; 

export default function About() {
  return (
    <html lang="en">  
      <body>
        {Content()}
      </body>
    </html>
  );
  async function Content(){
    const payload = await getPayload({ config });
    const content = await payload.findGlobal({ slug: 'about' });
    if (!content) {
      return <NotFound />;
    }
    return (
      <main>
        <AboutHeroSection heroContent={content.hero} />
        <SideMenu />
        <AboutFounderSection founderContent={content.founder} />
        <AboutOurStorySection storyContent={content.story} />
        <AboutTeamSection teamContent={content.team} />
        <AboutReviewsSection reviewContent={content.reviews} />
        <Footer />
      </main>
    );
  }
}
