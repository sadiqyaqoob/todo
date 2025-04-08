import { useState } from "react";
import "./App.css";

function App() {
  let [todolist, settodolist] = useState([]);
  let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finaltoDOlist = [...todolist, toname];
      settodolist(finaltoDOlist);
    } else {
      alert("already exist");
    }

    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItem
        value={value}
        kry={index}
        indexNumber={index}
        todolist={todolist}
        saveToDoList={settodolist}
      />
    );
  });
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" /> <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({ value, indexNumber, todolist, saveToDoList }) {
  let [status, setstatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    saveToDoList(finalData);
  };
  let checkStatus = () => {
    setstatus(!status);
  };

  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
