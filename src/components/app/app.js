import "./app.css";
import { useEffect, useState } from "react";
import AppInfo from "../app-info/app-info";
import TodoList from "../todo-list/todo-list";
import TodoAPI from "../../server/todoApi";
import Action from "../app-actionPanel/actionPanel";
import Spinner from "../spinner/spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    TodoAPI.getAllTodos()
      .then((data) => {
        setOriginalData(data.todos);
        setData(data.todos);
      })
      .finally(() => setLoading(false));
  }, []);

  const addTodo = (todo) => {
    setOriginalData([...originalData, todo]);
    setData([...data, todo]);
  };

  const searchTodo = (name) => {
    setLoading(true);
    if (!name) {
      setLoading(false);
      setData(originalData);
      return;
    }
    setData(
      originalData.filter((item) =>
        item.todo.toLowerCase().includes(name.toLowerCase())
      )
    );
    setLoading(false);
  };

  const filterTodo = (filterName) => {
    console.log("filter====", filterName);
    setLoading(true);
    if (filterName === "all") {
      setLoading(false);
      setData(originalData);
      return;
    }

    if (filterName === "active") {
      setData(
        originalData.filter((item) => {
          return item.completed === false;
        })
      );
    } else if (filterName === "done") {
      setData(
        originalData.filter((item) => {
          return item.completed === true;
        })
      );
    } else {
      setData(
        originalData.filter((item) => {
          return item.important === true;
        })
      );
    }
    setLoading(false);
  };

  const deleteTodo = (id) => {
    setLoading(true);
    setOriginalData(originalData.filter((item) => item.id !== id));
    setData(data.filter((item) => item.id !== id));
    setLoading(false);
  };

  const updateTodo = (updatedTodo) => {
    console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
    setLoading(true);
    setData((prevData) =>
      prevData.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );

    setOriginalData((prevOriginalData) =>
      prevOriginalData.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );

    setLoading(false);
  };

  return (
    <div className="app">
      <AppInfo />
      <Action
        addTodo={addTodo}
        searchTodo={searchTodo}
        filterTodo={filterTodo}
      />
      {loading ? (
        <Spinner name="Todos" />
      ) : (
        <TodoList data={data} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      )}
    </div>
  );
}

export default App;
