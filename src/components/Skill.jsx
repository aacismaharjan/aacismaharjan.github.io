import React from "react";

const Skill = ({ skill: { title }, secondary = false }) => {
  return (
    <div className="progress">
      <div
        className={`progress-bar progress-bar-striped progress-bar-animated ${
          secondary ? "bg-info" : ""
        }`}
        role="progressbar"
        style={{ width: "100%" }}
      >
        <span className="text-left pl-2">{title}</span>
      </div>
    </div>
  );
};

export default Skill;
