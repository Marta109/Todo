import "./todo-list.css";
import TodoListItem from "../todo-list-item/todo-list-item";
import Pagination from "../todo-pagination/todo-pagination";

const TodoList = ({
  todoListAction: { data, deleteTodo, updateTodo },
  pagination,
  filterName,
}) => {
  if (!Array.isArray(data)) return;
  if (data.length === 0)
    return (
      <ul className="todo-list">
        <p>No tasks found!!!.</p>
      </ul>
    );

  const elements = data.map((el) => {
    return (
      <TodoListItem
        key={el.id}
        {...el}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    );
  });

  return (
    <ul className="todo-list">
      {elements}
      {filterName === "all" ? <Pagination pagination={pagination} /> : ""}
    </ul>
  );
};

export default TodoList;
