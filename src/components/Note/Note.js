import React from "react";
import "./Note.css";

const Note = ({ obj, handleDelete, handleEdit, handleMove }) => {
  console.log(obj.name);
  return (
    <div>
      <div className="note">
        <div className="details">
          <p>{obj.name}</p>
          <span>{obj.description}</span>
        </div>
        <div className="bottom-content">
          <span>{obj.date}</span>
          <div className="icons">
            <div onClick={() => handleDelete(obj.id, obj.group)}>
              <img
                height="18px"
                src="images/delete-icon.png"
                alt=""
              />
            </div>
            <div onClick={() => handleEdit(obj.id, obj.group)}>
              <img
                height="18px"
                src="images/edit-icon.png"
                alt=""
              />
            </div>
            <div onClick={() => handleMove(obj.id, obj.group)}>
              <img
                height="18px"
                src="images/move-icon.png"
                alt=""
              />
            </div>
          </div>
          {/* <button
            className="btn btn-primary"
            onClick={() => handleDelete(obj.id, obj.group)}
          >
            Delete
          </button> 
           <button
            className="btn btn-secondary"
            onClick={() => handleEdit(obj.id, obj.group)}
          >
            Edit
          </button>
          <button
            className="btn btn-third"
            onClick={() => handleMove(obj.id, obj.group)}
          >
            Move to group
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Note;
