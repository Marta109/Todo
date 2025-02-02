import "./app-info.css";

const AppInfo = ({ todoInfo: { allTodos, doneTodos, currentTodos } }) => {
  return (
    <div className="app-info">
      <h1 className="title">Your Todos</h1>
      <h2>all Todos: {allTodos}</h2>
      <h2 className="sub-title"> Displayed Todos: {currentTodos}</h2>
      <h2 className="done-count sub-title">
        Finished tasks on this page: {doneTodos}{" "}
      </h2>
    </div>
  );
};

export default AppInfo;
