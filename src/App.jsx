import logoTK from "./img/svg/TKlogo.svg";
import Logo from "./components/Logo";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
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
        <TaskList />
      </main>
    </div>
  );
}

export default App;
