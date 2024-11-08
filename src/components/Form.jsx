import "../css/Form.css";
import Proptypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
    //newTaskValue is an object with a property taskName === the form starts with empty value on input field, on submit it will be emptied
  const [newTaskValue, setNewTaskValue] = useState({
    taskName: "",
  });

  //TAKES THE VALUE OF THE INPUT AND ADDS IT TO THE CURRENT STATE VALUE
  const changeHandler = (e) => {
    // console.log('New Task added', e.target.value);
    setNewTaskValue(e.target.value);
  };

  //HANDLES THE SUBMIT BUTTON CLICK, TAKES THE VALUE OF THE INPUT
  //NOTE THAT SUBMIT BUTTON DOESNT HAVE ANY HANDLER!!!!
  const submitFormHandler = (e) => {
    //prevents that the application would refresh on submit
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: newTaskValue,
      completed: false,
    };
    //ON SUBMIT
    // console.log(newTask);
    props.onSubmit(newTask);
    //resets the form
    setNewTaskValue({ taskName: "" });
  };

  return (
    <form className="container__form">
      <input
        className="form__input"
        type="text"
        placeholder="Write a new Task"
        name="task-name"
        onChange={changeHandler}
        value={newTaskValue.taskName}
      />
      <button className="form__btn" onClick={submitFormHandler}>
        Add task
      </button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  props: Proptypes.string,
  onSubmit: Proptypes.func.isRequired,
};
