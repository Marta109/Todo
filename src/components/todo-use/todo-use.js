import { useState, useEffect } from "react";
import TodoAPI from "../../server/todoApi";

export const useTodos = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [total, setTotal] = useState(0);
  const [doneTodosCount, setDoneTodosCount] = useState(0);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    TodoAPI.getAllTodos(currentPage)
      .then((data) => {
        setTotal(data.total);
        setOriginalData(data.todos);
        setData(data.todos);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  useEffect(() => {
    setDoneTodosCount(
      originalData.filter((item) => item.completed === true).length
    );
  }, [originalData]);

  const addTodo = (todo) => {
    setOriginalData([...originalData, todo]);
    setData([...data, todo]);
    setTotal((total) => total + 1);
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
    setFilter(filterName);
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
    setTotal((total) => total - 1);

    if (originalData.length - 1 === 0 && data.length - 1 === 0) {
      setCurrentPage(currentPage + 1);
    }
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
    pagination: {
      currentPage,
      total,
      limit: 4,
      setCurrentPage,
    },
    todoInfo: {
      allTodos: total,
      doneTodos: doneTodosCount,
      currentTodos: data.length,
    },
    todoAction: {
      addTodo,
      searchTodo,
      filterTodo,
    },
    todoListAction: {
      data,
      deleteTodo,
      updateTodo,
    },
    loading,
    filter,
  };
};
