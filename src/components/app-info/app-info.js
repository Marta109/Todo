import "./app-info.css";

const AppInfo = ({ allTodos, doneTodos }) => {
  return (
    <div className="app-info">
      <h1>Your Todos</h1>
      <h2>all Todos: {allTodos}</h2>
      <h2 className="done-count">done Todos: {doneTodos} </h2>
    </div>
  );
};

export default AppInfo;
