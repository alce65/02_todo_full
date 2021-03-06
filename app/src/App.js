import React from "react";
import { useSelector } from "react-redux";
import logo from "./logo.svg";
import { Counter } from "./components/counter";
import "./App.css";
import { ToDo } from "./components/todo/todo";
import { UserButtons } from "./components/user/user-buttons";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <header className="App-header">
        <header>
          <h1>
            ToDo List
            {user.isLogged && <span> de {user.userName}</span>}
          </h1>
          <UserButtons />
        </header>

        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        {user.isLogged && <ToDo />}
      </header>
    </div>
  );
}

export default App;
