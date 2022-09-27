import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/todoSlice";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {
  const dispatch = useDispatch();
  const [newDesc, setNewDesc] = useState("");

  return (
    <div>
      <h3 style={{ margin: "10px" }}> My Todo List</h3>
      <div style={{ display: "flex", margin: "10px", padding: "50px" }}>
        <input
          onChange={(e) => setNewDesc(e.target.value)}
          type="text"
          class="form-control"
          placeholder="Send your task"
        />
        <Button
          variant="success"
          onClick={() =>
            dispatch(
              addTask({ description: newDesc, isDone: false, id: uuidv4() })
            )
          }
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default Add;
