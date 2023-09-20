import "./App.css";
import Header from "../Header/Header.js";
import Modal from "../Modal/Modal";
import React, { useEffect } from "react";
import Note from "../Note/Note";
import "bootstrap/dist/css/bootstrap.min.css";
import Aside from "../Aside/Aside";
function App() {
  const [modal, setModal] = React.useState(false);
  const [taskList, setTaskList] = React.useState({
    number: 0,
    tasks: {},
  });
  const [newTask, setNewTask] = React.useState({
    name: "",
    description: "",
    date: "",
    group: "",
  });
  const [currentGroup, setCurrentGroup] = React.useState("main");

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
      newTask.id = newTask.id ?? prevTaskList.number;

      if (prevTaskList.tasks[newTask.group]) {
        let tmpArray = [...prevTaskList.tasks[newTask.group], newTask];

        localStorage.setItem(
          "taskList",
          JSON.stringify({
            ...prevTaskList,
            number: prevTaskList.number + 1,
            tasks: {
              ...prevTaskList.tasks,
              [newTask.group]: tmpArray,
            },
          })
        );
        return {
          ...prevTaskList,
          number: prevTaskList.number + 1,
          tasks: {
            ...prevTaskList.tasks,
            [newTask.group]: tmpArray,
          },
        };
      } else {
        localStorage.setItem(
          "taskList",
          JSON.stringify({
            ...prevTaskList,
            number: prevTaskList.number + 1,
            tasks: {
              ...prevTaskList.tasks,
              [newTask.group]: [newTask],
            },
          })
        );
        return {
          ...prevTaskList,
          number: prevTaskList.number + 1,
          tasks: {
            ...prevTaskList.tasks,
            [newTask.group]: [newTask],
          },
        };
      }
    });
  }
  function handleDelete(id, group) {
    setTaskList((prevTaskList) => {
      const tmpArray =
        prevTaskList.tasks[group].length > 1
          ? prevTaskList.tasks[group].filter((value, index) => value.id !== id)
          : [];
      localStorage.setItem(
        "taskList",
        JSON.stringify({
          ...prevTaskList,
          tasks: {
            ...prevTaskList.tasks,
            [group]: tmpArray,
          },
        })
      );
      return {
        ...prevTaskList,
        tasks: {
          ...prevTaskList.tasks,
          [group]: tmpArray,
        },
      };
    });
  }
  function handleEdit(id, group) {
    toggleModal();
    console.log(taskList.tasks[group].find((value) => value.id === id));
    setNewTask(taskList.tasks[group].find((value) => value.id === id));
    setTaskList((prevTaskList) => ({
      ...prevTaskList,
      number: prevTaskList.number - 1,
    }));
    handleDelete(id, group);
  }
  function handleMove(id, group) {
    let target = prompt("Enter group", "main");

    setCurrentGroup(target);

    const note = taskList.tasks[group].find((val) => val.id === id);
    console.log(note);
    note.group = target;

    handleDelete(id, group);
    setTaskList((prevTaskList) => ({
      ...prevTaskList,
      number: prevTaskList.number - 1,
    }));
    addTask(note);
  }

  return (
    <div className="App">
      <div className="Header">
        <Header onClick={toggleModal}></Header>
      </div>

      {taskList.number > 0 && (
        <div className="Aside">
          <Aside
            groupsList={Object.keys(taskList.tasks)}
            changeGroup={(group) => setCurrentGroup(group)}
            currentGroup={currentGroup}
          ></Aside>
        </div>
      )}

      {/* <button onClick={() => setCurrentGroup(prompt("Enter group"))}>
        Change group
      </button> */}
      <Modal
        newTask={newTask}
        setNewTask={setNewTask}
        modal={modal}
        toggleModal={toggleModal}
        addTask={addTask}
      ></Modal>
      <div className="note-wrapper">
        {taskList.tasks[currentGroup]?.map((e) => (
          <Note
            key={e.id}
            obj={e}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleMove={handleMove}
          ></Note>
        ))}
      </div>
    </div>
  );
}

export default App;
