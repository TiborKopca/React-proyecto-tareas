import logoTK from "./img/svg/TKlogo.svg";
import Logo from "./components/Logo";
// import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  // const [inpust, setInput] = useState("");


  return (
    <div className="app">
      <div className="logo-container">
        <Logo 
          src={logoTK} 
          alt="logo Tibor Kopca" 
        />
      </div>
      <main className="main__container">
        <h1>Task Manager</h1>
        <Task text="Learn React" />
       
      </main>
    </div>
  );
}

export default App;
