import "./app.css";
import { useTodos } from "../todo-use/todo-use";
import AppInfo from "../app-info/app-info";
import TodoList from "../todo-list/todo-list";
import Action from "../app-actionPanel/actionPanel";
import Spinner from "../spinner/spinner";

function App() {
  const {
    data,
    loading,
    addTodo,
    searchTodo,
    filterTodo,
    deleteTodo,
    updateTodo,
  } = useTodos();

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
