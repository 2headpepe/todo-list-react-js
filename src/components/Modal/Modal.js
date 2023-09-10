import React from "react";
import "./Modal.css";
const Modal = (props) => {
  const { toggleModal, addTask } = props;

  const [newTask, setNewTask] = React.useState({
    name: "",
    description: "",
  });

  function handleChange(event) {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  }

  function onCancel() {
    setNewTask({
      name: "",
      description: "",
    });
    toggleModal();
  }

  function onSubmit() {
    addTask(newTask);
    // console.log(newTask);
    setNewTask({
      name: "",
      description: "",
    });
  }

  return (
    <div>
      {props.modal && (
        <div className="Modal">
          <div className="Modal--content">
            <h2>Create task</h2>
            <hr />
            <form>
              <div class="text-field">
                <label
                  className="text-field__label"
                  htmlFor="taskName"
                >
                  Task name
                </label>
                <input
                  className="input form-control"
                  type="text"
                  name="name"
                  id="taskName"
                  onChange={handleChange}
                  value={newTask.name}
                />
              </div>
              <div class="text-field">
                <label>Description</label>
                <textarea
                  //   id=""
                  rows="10"
                  className="input form-control"
                  name="description"
                  onChange={handleChange}
                  value={newTask.description}
                ></textarea>
              </div>
            </form>

            <button
              onClick={onCancel}
              className="btn cancel-button btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="btn submit-button btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
