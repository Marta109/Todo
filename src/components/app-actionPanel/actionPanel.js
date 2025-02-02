import "./actionPanel.css";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import TodoAddFrm from "../todo-add-new/add-new-todo";

const Action = ({ todoAction: { addTodo, searchTodo, filterTodo } }) => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="true"
            aria-controls="flush-collapseOne"
          >
            Action Panel
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <TodoAddFrm addTodo={addTodo} />
            <SearchPanel searchTodo={searchTodo} />
            <AppFilter filterTodo={filterTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
