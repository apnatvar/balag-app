import React from "react";

export default function TeamCard({ source, name, role}){
    return (
        <div className="team-member">
          <img
            className="image"
            loading="lazy"
            src={source}
            alt={name} />
          <h4 className="name">{name}</h4>
          <p className="role">{role}</p>
        </div>
    );
}