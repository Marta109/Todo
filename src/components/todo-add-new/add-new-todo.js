import { useState } from "react";
import "./add-new-todo.css";
import TodoAPI from "../../server/todoApi";
import Spinner from "../spinner/spinner";

const AddNewTodo = ({ addTodo }) => {
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState({
    todo: "",
    completed: false,
    userId: 10,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const todo = newTodo.todo.trim();

    if (!todo || todo === "" || todo.length <= 2) {
      setLoading(false);
      return;
    }

    TodoAPI.addTodo(newTodo)
      .then((data) => {
        if (data) {
          addTodo(data);
        }
      })
      .finally(() => {
        setLoading(false);
        setNewTodo({ ...newTodo, todo: "" });
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <form className="todo-add-form input-group" onSubmit={handleSubmit}>
      <input
        className="form-control "
        type="text"
        placeholder="Add a new todo..."
        onChange={(e) => setNewTodo({ ...newTodo, todo: e.target.value })}
        value={newTodo.todo}
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddNewTodo;
