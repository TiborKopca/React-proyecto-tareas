import PropTypes from "prop-types";
import "../css/Task.css";
import { AiFillDelete } from "react-icons/ai";

function Task({ text, completed }) {
  return (
    <div
      className={completed ? "container__task completed" : "container__task"}
    >
      <div className="task-text">{text}</div>
      <div className="task-icon">
        <AiFillDelete />
      </div>
    </div>
  );
}

export default Task;

Task.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};
