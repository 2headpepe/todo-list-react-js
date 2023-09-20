import React from "react";
import "./Aside.css";
const Aside = ({ groupsList, changeGroup, currentGroup }) => {
  return (
    <div className="notes-wrapper">
      {groupsList.map((e) => {
        if (e === currentGroup) {
          return (
            <div
              onClick={() => changeGroup(e)}
              className="group-button current"
            >
              <div className="e">{e}</div>
            </div>
          );
        } else {
          return (
            <div
              onClick={() => changeGroup(e)}
              className="group-button"
            >
              <div className="e">{e}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Aside;
