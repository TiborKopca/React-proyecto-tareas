import Form from "./Form";
import "../css/TaskList.css";
import { useState , useEffect} from "react";
import Task from "./Task";

function TaskList() {
// Load from localStorage or initialize as an empty array
  const [tasks, setTasks] = useState(() => {
//LOCAL STORAGE
 //LOAD data from localStorage when the component mounts
    //getItem returns a string
    //if we are storing arrays, we need to parse the data
    const savedData = localStorage.getItem("myData");
    // console.log(savedData);
    return savedData ? JSON.parse(savedData) : []; // Parse only if saved data exists
});

  //ADDS A NEW TASK
  //OBTAINS THE TASK FROM THE FORM ON SUBMIT
  const addTask = (task) => {
    // console.log(task);
    //checks if the task is empty
    if (task.text.trim()) {
      //trims the text
      task.text = task.text.trim();

      //new tasks will be added to the start of the array
      const updatedTasks = [task, ...tasks];
      //updates the state with the new tasks
      setTasks(updatedTasks);
    }
  };

  //COMPLETES A TASK (MARKS IT AS COMPLETED)
  const completeTask = (id) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        //changes the completed value to the opposite of the current value
        task.completed = !task.completed;
      }
      return task;
    });
    //updates the state with the new tasks
    setTasks(tasksUpdated);
  };

  //DELETES A TASK
  const deleteTask = (id) => {
    //filters the tasks array and returns the array without the task with the given id
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdated);
  };
 
  //SAVE data to localStorage whenever it changes
  useEffect(() => {
    //converts the tasks array to a string when storing it., to get the ARRAY into the string, we need to JSON.stringify() to save the tasks array as a JSON string in local storage. 
    localStorage.setItem("myData", JSON.stringify(tasks)); // Convert tasks to JSON string
  }, [tasks]);



  return (
    <>
      <Form onSubmit={addTask} />
      <div className="container__tasklist">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask}

          ></Task>
        ))}
      </div>
    </>
  );
}

export default TaskList;






