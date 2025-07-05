import React from "react";

export default function AboutTeamSection({ teamContent }) {
    if (!teamContent) return <p>Loading...</p>;

    return (
      <section className="team">
        <h2 className="heading">{teamContent.heading}</h2>
        <div className="team-members">
          {generateTeamCards(teamContent.members)}
        </div>
      </section>
    );

    function generateTeamCards(members) {

        if (!members) return <p>Loading...</p>;

        return members.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              className="image"
              loading="lazy"
              src={member.image}
              alt={member.alt} />
            <h4 className="name">{member.name}</h4>
            <p className="role">{member.role}</p>
          </div>
        ));
    }
}