import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header text-center">
      <h3>Todo list</h3>
      <button className="btn btn-primary mt-2">Create Task</button>
    </div>
  );
};

export default Header;
