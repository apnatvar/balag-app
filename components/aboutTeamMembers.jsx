import React from "react";
import TeamCard from "./teamCards";

export default function AboutTeamSection() {
    return (
      <section className="team">
        <h2 className="heading">Team Members</h2>
        <div className="team-members">
          <TeamCard source="/assets/about-us/amit-verma.jpg" name="Amit Verma" role="Business Development Manager" /> 
          <TeamCard source="/assets/about-us/gaurav-sengar.jpg" name="Gaurav Sengar" role="Business Development Manager (Delhi)" />
          <TeamCard source="/assets/about-us/test-member.jpg" name="Yash Singh" role="Event Manager" />
        </div>
      </section>
    );
}