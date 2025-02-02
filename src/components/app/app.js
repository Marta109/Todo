import "./app.css";
import { useTodos } from "../todo-use/todo-use";
import AppInfo from "../app-info/app-info";
import TodoList from "../todo-list/todo-list";
import Action from "../app-actionPanel/actionPanel";
import Spinner from "../spinner/spinner";

function App() {
  const { loading, filter, pagination, todoInfo, todoAction, todoListAction } =
    useTodos();

  return (
    <div className="app">
      <AppInfo todoInfo={todoInfo} />
      <Action todoAction={todoAction} />
      {loading ? (
        <Spinner name="Todos" />
      ) : (
        <TodoList
          todoListAction={todoListAction}
          pagination={pagination}
          filterName={filter}
        />
      )}
    </div>
  );
}

export default App;
