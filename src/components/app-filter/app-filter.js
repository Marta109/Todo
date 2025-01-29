import { useState } from "react";
import "./app-filter.css";

const AppFilter = ({ filterTodo }) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    const newFilter = event.target.id;
    setFilter(newFilter);
    filterTodo(newFilter);
  };

  return (
    <div className="app-filter">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="all"
        autoComplete="off"
        checked={filter === "all"}
        onChange={handleFilterChange}
      />
      <label className="btn btn-outline-primary" htmlFor="all">
        All Todos
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="active"
        autoComplete="off"
        checked={filter === "active"}
        onChange={handleFilterChange}
      />
      <label className="btn btn-outline-primary" htmlFor="active">
        Active Todos
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="done"
        autoComplete="off"
        checked={filter === "done"}
        onChange={handleFilterChange}
      />
      <label className="btn btn-outline-primary" htmlFor="done">
        Done Todos
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="important"
        autoComplete="off"
        checked={filter === "important"}
        onChange={handleFilterChange}
      />
      <label className="btn btn-outline-primary" htmlFor="important">
        Important Todos
      </label>
    </div>
  );
};

export default AppFilter;
