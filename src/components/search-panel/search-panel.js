import { useState } from "react";
import "./search-panel.css";

const SearchPanel = ({ searchTodo }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTodo(search);
    setSearch("");
  };

  return (
    <form className="search input-group" onSubmit={handleSubmit}>
      <input
        className="form-control search-input"
        type="text"
        placeholder="Search  todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
