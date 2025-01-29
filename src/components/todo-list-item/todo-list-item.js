import { useState } from "react";
import "./todo-list-item.css";
import TodoAPI from "../../server/todoApi";

const TodoListItem = ({
  deleteTodo,
  updateTodo,
  id,
  todo,
  completed,
  userId,
  important = false,
}) => {
  const [importantly, setImportant] = useState(important);
  const [finished, setCompleted] = useState(completed);
  const [todoItem, setTodo] = useState(todo);

  const done = finished ? "done" : "";
  const imo = importantly ? "important" : "";
  const classes = `list-group-item todo-list-item ${done} ${imo}`;

  const updateHandler = (updatedData) => {
    TodoAPI.updateTodo(id, updatedData).then((data) => {
      if (data) {
        updateTodo(data);
      }
    });
  };

  const isImportant = () => {
    setImportant(!importantly);
  };

  const isCompleted = () => {
    const updateTodo = {
      completed: !finished,
      todo,
      userId,
    };
    setCompleted(!finished);
    updateHandler(updateTodo);
  };

  const handleDelete = () => {
    TodoAPI.deleteTodo(id).then((data) => {
      if (data) {
        deleteTodo(id);
      }
    });
  };
  return (
    <li className={classes}>
      <button
        type="button"
        className="btn-cookie btn-sm "
        onClick={isCompleted}
      >
        <i className="fa-solid fa-check"></i>
      </button>

      <input
        type="text"
        className="todo-list-item form-control"
        defaultValue={todoItem}
        onBlur={() =>
          updateHandler({
            todo: todoItem,
          })
        }
      />

      <button type="button" className="btn-star btn-sm ">
        <i className="fas fa-star" onClick={isImportant}></i>
      </button>

      <button
        type="button"
        className="btn-trash btn-sm "
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default TodoListItem;
