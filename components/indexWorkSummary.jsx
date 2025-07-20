import React from "react";
import TypewriterAndFadeAnimation from "./typewriterAndFadeAnimation";
import Image from 'next/image'
export default function IndexWorkSummarySection({ workSummaryContent }) {
  return (
    <section className="work-summary">
      <div className="content">
        <Image className="image" src={workSummaryContent.image.url} alt={workSummaryContent.image.alt} />
        <TypewriterAndFadeAnimation text={workSummaryContent.title} speed="300" nameOfClass="heading"/>
        <div className="pinstripe"></div>
        <p className="subheading">{workSummaryContent.description}</p>
      </div>
    </section>
  );
}