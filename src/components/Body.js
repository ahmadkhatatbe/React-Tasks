import { userState } from "react";

function Body() {
  function App() {
    const [todolist, settodolist] = userState([]);
    const [newtask, setnewtask] = userState("");

    const handleChange = (event) => {
      setnewtask(event.target.value);
    };
    return (
      <div className="App">
        <div className="addTask">
          <input />
          <button onChange={handleChange}>Add Task</button>
        </div>
        <div className="list"></div>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
export default Body;
