const NewTask = (props) => {
  return (
    <form onSubmit={props.handleAllTodos} className="container">
      <input
        type="text"
        onChange={props.handleTodo}
        className="submit-field"
        placeholder="Write a task..."
      />
      <input type="submit" value="Add task" className="submit-btn" />
    </form>
  );
};

export default NewTask;
