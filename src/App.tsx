import React, { useState } from "react";
import InputForm from "./components/InputForm";
import "./App.css";
import List from "./components/List";

const App: React.FC = () => {
  const [toDos, setToDos] = useState<Array<ToDo>>([]);
  const addToDo: AddToDo = (newToDo) => {
    newToDo.trim().length > 1 &&
      setToDos([...toDos, { text: newToDo, complete: false }]);
  };
  const toggleHandler: ToggleList = (task) => {
    const updatedToDos = toDos.map((todo) => {
      if (todo === task) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setToDos(updatedToDos);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>YOLO!</h1>
        <InputForm addToDo={addToDo} />
        <List toDos={toDos} toggleComplete={toggleHandler} />
      </header>
    </div>
  );
};

export default App;
