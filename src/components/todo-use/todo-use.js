import { useState, useEffect } from "react";
import TodoAPI from "../../server/todoApi";

export const useTodos = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return {
    data,
    originalData,
    loading,
    addTodo,
    searchTodo,
    filterTodo,
    deleteTodo,
    updateTodo,
  };
};
