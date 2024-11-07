import logoTK from "./img/svg/TKlogo.svg";
import Logo from "./components/Logo";
// import { useState } from "react";
import "./App.css";

function App() {
  // const [input, setInput] = useState("");


  return (
    <div className="app">
      <div className="logo-container">
        <Logo src={logoTK} alt="logo Tibor Kopca" />
      </div>
      <main className="main__container">
        <h1>Task Manager</h1>

       
      </main>
    </div>
  );
}

export default App;
