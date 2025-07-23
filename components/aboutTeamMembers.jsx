import React from "react";

export default function AboutTeamSection({teamContent}) {
    return (
      <section className="team">
        <h2 className="heading">{teamContent.heading}</h2>
        <div className="team-members">
          {generateTeamCards(teamContent.members)}
        </div>
      </section>
    );

    function generateTeamCards(members) {
      return members.map((member, index) => (
        <div className="team-member" key={index}>
          <img
            className="image"
            loading="lazy"
            src={member.image.url}
            alt={member.image.alt} />
          <h4 className="name">{member.name}</h4>
          <p className="role">{member.role}</p>
        </div>
      ));
    }
}