import "./App.css";
import Header from "../Header/Header.js";
import Modal from "../Modal/Modal";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [modal, setModal] = React.useState(false);

  const [taskList, setTaskList] = React.useState([]);

  function toggleModal() {
    setModal((prevModal) => !prevModal);
    // console.log(modal);
  }

  function addTask(newTask) {
    console.log(newTask);
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    console.log(taskList);
  }

  return (
    <div className="App">
      <Header onClick={toggleModal}></Header>
      <Modal
        modal={modal}
        addTask={addTask}
        toggleModal={toggleModal}
      ></Modal>
      {taskList.map((e) => (
        <div>{e.name + " " + e.description}</div>
      ))}
    </div>
  );
}

export default App;
