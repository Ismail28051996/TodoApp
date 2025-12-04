import { useState } from "react";
import "./App.css";
import { Button, ListGroup } from "react-bootstrap";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) return;
    const updateList = [...list, task];
    setList(updateList);
    console.log("first", updateList);
    setTask("");
  };
  const editTask = (index) => {
    const update = prompt("Edit task", list[index]);
    if (update && update.trim()) {
      const updateList = [...list];
      updateList[index] = update;
      setList(updateList);
      console.log("edit", updateList);
    }
  };
  const deleteTask = (index) => {
    // alert("delete");
    confirm("are you sure?");
    const updateList = list.filter((_, i) => i !== index);
    setList(updateList);
  };

  return (
    <>
      <div className="app">
        <h1>To Do App </h1>
        <form>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
         
          <ListGroup className="mt-3">
            {list.map((t, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                {t}

                <Button
                  onClick={() => editTask(index)}
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  Edit
                </Button>

                <Button
                  onClick={() => deleteTask(index)}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </form>
      </div>
    </>
  );
}

export default App;
