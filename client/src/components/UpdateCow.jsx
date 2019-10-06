import React from "react";

const UpdateCow = props => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="update_cow_name" value={props.cowInfo.update_cow_name} onChange={props.handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="update_cow_description" value={props.cowInfo.update_cow_description} onChange={props.handleChange} />
        </label>
      </form>
      <button onClick={props.updateCow}>Submit!!! HATE COWS!!!</button>
    </div>
  );
};

export default UpdateCow;
