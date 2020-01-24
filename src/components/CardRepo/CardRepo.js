import React from "react";

const CardRepo = props => (
  <div>
    <h3>{props.repo.name}</h3>
    <h6>{props.repo.private ? "private" : "public"}</h6>
  </div>
);

export default CardRepo;
