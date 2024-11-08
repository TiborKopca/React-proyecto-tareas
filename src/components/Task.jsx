import PropTypes from "prop-types";
import "../css/Task.css";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

//ID is generated by UUID, its needed to access the correct object
function Task({ id, text, completed, completeTask, deleteTask}) {
  //tooltip is used to show a tooltip when the user hovers over the delete icon
  const [show, setShow] = useState(false);

  return (
    <div
      className={completed ? "container__task completed" : "container__task"}
    >
      <div className="task-text" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div
        className="task-icon"
        onClick={() => deleteTask(id)}
      
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && <div className="tooltip">Delete Task</div>}
        <AiFillDelete />
      </div>
    </div>
  );
}

export default Task;

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  completeTask: PropTypes.func,
  deleteTask: PropTypes.func,
};
