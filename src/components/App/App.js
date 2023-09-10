import "./App.css";
import Header from "../Header/Header.js";
import Modal from "../Modal/Modal";
import React, { useEffect } from "react";
import Note from "../Note/Note";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [modal, setModal] = React.useState(false);

  const [taskList, setTaskList] = React.useState([]);

  useEffect(() => {
    let obj = localStorage.getItem("taskList");
    if (obj) {
      let arr = JSON.parse(obj);
      setTaskList(arr);
    }
  }, []);

  function toggleModal() {
    setModal((prevModal) => !prevModal);
  }

  function addTask(newTask) {
    setTaskList((prevTaskList) => {
      let tmpArray = [...prevTaskList, newTask];
      localStorage.setItem("taskList", JSON.stringify(tmpArray));
      return tmpArray;
    });
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
        <Note
          name={e.name}
          description={e.description}
        ></Note>
      ))}
    </div>
  );
}

export default App;
