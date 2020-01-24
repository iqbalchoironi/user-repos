import React from "react";
import CardRepo from "../CardRepo/CardRepo";

const ListRepositories = props => (
  <ul>
    {props.repositories.map(dt => (
      <CardRepo repo={dt} />
    ))}
  </ul>
);

export default ListRepositories;
