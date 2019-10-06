import React from "react";

const CowInfo = props => {
  return (
    <div className="modal">
      <h3>{props.cow[0].cow_name}</h3>
      <p>{props.cow[0].cow_description}</p>
    </div>
  );
};

export default CowInfo;
