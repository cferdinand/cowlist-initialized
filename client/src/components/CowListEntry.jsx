import React from "react";

const CowListEntry = props => {
  return (
    <div>
      <li
        id={props.cow.id}
        onClick={event => {
          props.handleCow(props.cow);
        }}
      >
        {props.cow.cow_name}
      </li>
      <button
        type="delete"
        onClick={event => {
          event.preventDefault();
          props.deleteCow(props.cow.id);
        }}
      >
        delete
      </button>
      <button
        type="update"
        id={props.cow.id}
        onClick={event => {
          event.preventDefault();
          props.handleUpdateCow(props.cow.id);
        }}
      >
        update
      </button>
    </div>
  );
};

export default CowListEntry;
