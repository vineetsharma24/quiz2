import React from "react";

function Feedback() {
  return (
    <div>
      <form>
        <label>
          FirstName:
          <input type="text" name="firstName" />
        </label>
        <label>
          LastName:
          <input type="text" name="lastName" />
        </label>
        <label>
          Mobile Number:
          <input type="number" name="number" />
        </label>
        <label>
          Feedback
          <input type="text" name="feedback" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Feedback;
