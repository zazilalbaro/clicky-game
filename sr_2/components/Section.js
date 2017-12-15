import React from "react";
import ../

const Section = props => (
  <section className="section">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      // <span onClick={() => props.removeFriend(props.id)} className="remove">
      // </span>
    </div>
);
export default FriendCard;
  </section>
);

export default Section;
