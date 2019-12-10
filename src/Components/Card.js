import React, { Component } from "react";
import "../App.css";
export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let person = this.props.person;
    return (
      
      <div className="card-wrapper">
        <div className="inner-card-wrapper">
          <h2 className="firstname">
            {person.name.first} {person.name.last}
          </h2>
          <h3 className="from">
            <b>From:</b> {person.city}, {person.country}
          </h3>
          <h3 className="title">Title: {person.title}</h3>
          <h3 className="employer">Employer: {person.employer}</h3>
          <h3>Favorite Movies:</h3>
          <ol>
          {person.favoriteMovies.map(e => (
            <li key={e}>{e}</li>
          ))}

          </ol>
        </div>
        <h3 className="index">
          {" "}
          Index: ({person.id}/{person.idlength})
        </h3>
      </div>
    );
  }
}
