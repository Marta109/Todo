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
        <p> No tasks available. Enjoy your free time! 🎉</p>
        <div className="no-task">
          <img
            src="https://media.giphy.com/media/qUEkcv8EGkRUV4Ufl0/giphy.gif?cid=ecf05e472z05vumh03zmj72yluh74i3e5n679pb4b2feenc4&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="No tasks"
          />
        </div>
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
